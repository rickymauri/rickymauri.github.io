const router = require('socket.io-events')();
const { celebrateSocket, stringCelebrateSchema, numberCelebrateSchema, valueCelebrateSchema } = require('../../utils/joiMiddleware');
const { SocketUtils } = require('../../utils/socket.utils');
const {logger} = require('../../config/loggerConfig');
const feedbackServices = require('../../services/feedbackServices');
const questionServices = require('../../services/questionServices');
const formServices = require('../../services/formServices');

module.exports = (io) => {

    router.on(
        "student:submitFeedback",
        celebrateSocket({
            body: {
                understandingValue: valueCelebrateSchema,
                complexityValue: valueCelebrateSchema,
                explainationValue: valueCelebrateSchema,
                studentId: numberCelebrateSchema,
                formId: numberCelebrateSchema
            },
        }),
        async (socket, args, next) => {
            try {
                const {
                    understandingValue,
                    complexityValue,
                    explainationValue,
                    studentId,
                    formId
                } = args[1].body;

                await feedbackServices.createFeedback(
                    understandingValue,
                    complexityValue,
                    explainationValue,
                    studentId,
                    formId
                );
                logger.info(`[SOCKET] Feedback submitted by socket ${socket.id}`);
                const feedbacks = await formServices.getFormResults(formId);
                const numberOfConnectedStudents = await SocketUtils.getNumberOfConnectedStudents(formId);
                const connectedSockets = await SocketUtils.getConnectedSockets(formId);
                connectedSockets.forEach((s) => {
                    s.emit("all:feedbackResults", feedbacks, numberOfConnectedStudents); //Send the event to all sockets in the room
                });
            }
            catch (err) {
                next(err);
            }
        }
    );
    
    router.on(
        "student:submitQuestion",
        celebrateSocket({
            body: {
                questionText: stringCelebrateSchema,
                formId: numberCelebrateSchema
            },
        }),
        async (socket, args, next) => {
            try {
                const {questionText, formId} = args[1].body;
                const newQuestion = await questionServices.createQuestion(questionText, formId);
                logger.info(`[SOCKET] Question submitted by socket ${socket.id}`);
                const question = await questionServices.getQuestionMainFields(newQuestion.id);
                const connectedSockets = await SocketUtils.getConnectedSockets(formId);
                connectedSockets.forEach((s) => {
                    s.emit("all:questionUpdate", question); //Send the event to all sockets in the room
                });
            }
            catch (err) {
                next(err);
            }
        }
    );

    router.on(
        "student:likedQuestion",
        celebrateSocket({
            body: {
                questionId: numberCelebrateSchema,
                formId: numberCelebrateSchema
            },
        }),
        async (socket, args, next) => {
            try {
                const {questionId, formId} = args[1].body;
                await questionServices.incrementNumberOfLikes(questionId);
                logger.info(`[SOCKET] Question liked by socket ${socket.id}`);
                const question = await questionServices.getQuestionMainFields(questionId);
                const connectedSockets = await SocketUtils.getConnectedSockets(formId);
                connectedSockets.forEach((s) => {
                    s.emit("all:questionUpdate", question); //Send the event to all sockets in the room
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
