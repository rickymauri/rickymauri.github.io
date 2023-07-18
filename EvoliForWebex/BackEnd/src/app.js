const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const cors = require('cors');
const {errors} = require('celebrate');
const {isCelebrateError} = require('celebrate');
const {Errors, EvoliError} = require('./utils/error.utils');
const sequelize = require('./config/database');
const logger = require('./config/loggerConfig');
require('./config/associations');

const app = express();
const server = http.createServer(app);
const socketServer = require('./sockets/server/SocketServer')(server);

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(bodyParser.json());

app.use(errors());

app.use(cors());

server.listen(8080, async () => {
  console.log('Server is running on port 8080');
  await sequelize
  //.sync({force: true}) // uncomment to create the db schema the first time
    .sync()
    .then(() => {
      console.log('Database connected');
    })
    .catch((err) => {
      console.log('Unable to connect to the database');
      next(err);
    });
});

// error handler middleware
app.use((err, req, res, next) => {
  if (isCelebrateError(err)) err = Errors.celebrateError(err);

  const reqInfo = `${req.method} ${req.url}`;
  logger.error(`${reqInfo} ${err.code}`);
  Errors.printError(err);
  if (!err instanceof EvoliError) err = Errors.genericError();
  return res.status(err.status ?? 500).json(err);
});

module.exports = {app, server, socketServer};
