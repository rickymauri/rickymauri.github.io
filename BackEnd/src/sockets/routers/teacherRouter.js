const router = require('socket.io-events')();
const { Joi } = require('celebrate');
const { celebrateSocket, numberCelebrateSchema } = require('../../utils/joiMiddleware');
const { SocketUtils } = require('../../utils/socket.utils');
const { logger } = require('../../config/loggerConfig');
const formServices = require('../../services/formServices');

module.exports = (io) => {

    //const socketDataMap = new Map(); // by using this map, we could store data for each socket and avoid useless data exchange between client and server

    router.on(
        "teacher:closeForm",
        celebrateSocket({
            body: {
                formId: numberCelebrateSchema
            },
        }),
        async (socket, args, next) => {
            try {
                const formId = args[1].body.formId;
                //const formId = socketDataMap.get(socket.id);
                await formServices.closeForm(formId);
                logger.info(`[SOCKET] Form closed for room ${formId}`);
                const isClosed = await formServices.isFormClosed(formId);
                const connectedSocket = await SocketUtils.getConnectedSockets(formId);
                connectedSocket.forEach((s) => {
                    s.emit("all:formIsClosed", isClosed); //Send the event to all sockets in the room
                });
            }
            catch (err) {
                next(err);
            }
        }
    );

    router.on("*", (err, socket, args, next) => {
        io.errorHandling(err, socket, args, next);
        next();
    });

    return router;
}