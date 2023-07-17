const formServices = require("../services/formServices");

class SocketUtils {

    static async getCurrentRoom(formId) {
        const form = await formServices.getFormById(formId);
        const currentRoom = lobby.getRoom(form);
        return currentRoom;
    }

    static async getConnectedSockets(formId) {
        const currentRoom = await SocketUtils.getCurrentRoom(formId);
        const connectedSocket = await currentRoom.getConnectedSocket();
        return connectedSocket;
    }

    static async getNumberOfConnectedStudents(formId) {
        const connectedSocket = await SocketUtils.getConnectedSockets(formId);
        let numberOfConnectedSockets = connectedSocket.length;
        return numberOfConnectedSockets - 1; // -1 because the teacher is also connected
    }
}

module.exports = { SocketUtils };