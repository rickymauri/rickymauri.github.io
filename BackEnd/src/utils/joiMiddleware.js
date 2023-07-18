const { Joi, celebrate } = require("celebrate");

const celebrateSocket = (validationObject) => {
  return async (socket, args, next) => {
    const body = args[1].body || {};
    try {
      await celebrate(validationObject)({
        method: "WS",
        body: body,
      });

      socket.body = body;

      next();
    } catch (err) {
      next(err);
    }
  };
};

const stringCelebrateSchema = Joi.string().min(1).max(255).not(null).required();
const numberCelebrateSchema = Joi.number().min(1).not(null).required();
const valueCelebrateSchema = Joi.number().min(1).max(3).not(null).required();

module.exports = { celebrateSocket, stringCelebrateSchema, numberCelebrateSchema, valueCelebrateSchema};