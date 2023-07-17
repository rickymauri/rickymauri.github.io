const {Server: SocketServer} = require('socket.io');
const {Lobby} = require('./Lobby');
const {logger} = require('../../config/loggerConfig');
const {Errors} = require('../../utils/error.utils');
const teacherRouter = require('../routers/teacherRouter');
const studentRouter = require('../routers/studentRouter');
const teacherServices = require('../../services/teacherServices');
const formServices = require('../../services/formServices');
const studentServices = require('../../services/studentServices');

module.exports = (expressServer) => {
  const server = new SocketServer(expressServer, {
    cors: {
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST', 'DELETE'],
    },
  });

  //const lobby = new Lobby(server);
  global.lobby = new Lobby(server);

  server.errorHandling = function (err, socket, args, next) {
    Errors.printError(err);
    socket.emit('error', err);
    next();
  };

  server.use(teacherRouter(server));
  server.use(studentRouter(server));

  server.on('connection', async (socket) => {
    logger.info(`[SOCKET] New connection for socket: ${socket.id}`);
    try {
      const isTeacherLogin = socket.handshake.query.isTeacher === 'true';
      const username = socket.handshake.query.username;
      let form;
      let formId;
      let formCode;
      let studentId;
      //Teacher login branch: create a new form
      if (isTeacherLogin) {
        const formTitle = socket.handshake.query.title;
        form = await teacherLogin(username, formTitle);
        formCode = form.code;
        formId = form.id;
      }

      //Student login branch: join an existing form
      else {
        formCode = socket.handshake.query.code;
        const student = await studentServices.createStudent(username, formCode);
        studentId = student.id;
        form = await formServices.getFormByCode(formCode);
        formId = form.id;
      }

      const roomName = getRoomName(form);
      socket.join(roomName);
      socket.data = {formId: formId}; // store formId for the disconnect event

      if (isTeacherLogin) {
        socket.emit('teacher:feedbackResultsPage', formId, formCode);
      }
      else {
        const isClosed = await formServices.isFormClosed(formId);
        socket.emit('student:submitFeedbackPage', studentId, formId, isClosed);
      } 
    }   
    catch (err) {
      Errors.printError(err);
    }

    socket.on('disconnect', async (args) => {
      logger.info(`[SOCKET] Disconnected socket: ${socket.id}`);
      try {  
        deleteRoomIfEmpty(socket);
      } catch (err) {
        Errors.printError(err);
      }
    });
  });

  function getRoomName(form) {
    let room = lobby.getRoom(form);
    if (!room)
      room = lobby.createRoom(form);
    return room.name;
  }

  async function teacherLogin(teacherUsername, formTitle) {
    const teacher = await teacherServices.createTeacher(teacherUsername);
    const form = await formServices.createForm(formTitle, teacher.id);
    logger.info(`[FORM] Created form: ${form.id} with title: ${form.title}`);
    return form;
  } 

  async function deleteRoomIfEmpty(socket) {
    const formId = socket.data.formId;
    const form = await formServices.getFormById(formId);
    const room = lobby.getRoom(form);
    const isRoomEmpty = await room.isRoomEmpty();
    if (isRoomEmpty)
      lobby.deleteRoom(form);
  }

  return server;
};
