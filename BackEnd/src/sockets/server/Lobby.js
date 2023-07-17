const { logger } = require('../../config/loggerConfig');
const { Errors } = require('../../utils/error.utils');
const { Room } = require('./Room');

class Lobby {
    
    constructor(io) {
        this.io = io;
        this.rooms = {};
    }

    createRoom(form) {
        const room = new Room(this.io, form);
        this.rooms[form.id] = room;
        logger.info(`[ROOM] Created ${room.name}`);
        return room;
    }

    deleteRoom(form) {
        const room = this.rooms[form.id];
        if(!room)
            throw Errors.roomNotFound();
        if(!room.isRoomEmpty())
            throw Errors.roomNotEmpty();

        delete this.rooms[form.id];
        logger.info(`[ROOM] Deleted empty ${room.name}`);
    }

    getRoom(form) {
        return this.rooms[form.id];
    }

    getConnectedSocketsInRoom(form) {
        const room = this.getRoom(form);
        if(!room)
            throw Errors.roomNotFound();
        const connectedSocket = room.getConnectedSocket();
        return connectedSocket;
    }
}

module.exports = { Lobby };