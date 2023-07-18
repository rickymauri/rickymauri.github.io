const { StudentService } = require('../../services/studentServices');
const { TeacherService } = require('../../services/teacherServices');
const { FormService } = require('../../services/formServices');

class Room {
    constructor(io, form) {
        this.io = io;
        this.form = form; // Form sequelize model
        this.name = `Room:${form.id}`;
    }

    async getConnectedSocket() {
        return await this.io.in(this.name).fetchSockets();
    }

    async getNumberOfConnectedSocket() {
        const connectedSockets = await this.getConnectedSocket();
        const numberOfConnectedSockets = connectedSockets.length;
        return numberOfConnectedSockets;
    }

    async isRoomEmpty() {
        const numberOfConnectedSockets = await this.getNumberOfConnectedSocket();
        const isEmpty = (numberOfConnectedSockets === 0);
        return isEmpty;
    }

}

module.exports = { Room };