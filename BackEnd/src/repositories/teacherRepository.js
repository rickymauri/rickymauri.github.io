const TeacherModel = require('../models/teacher');

class TeacherRepository {
    
    static async createTeacher(username) {
        const teacher = await TeacherModel.create({username: username });
        return teacher;
    }

    static async getTeacherByUsername(username) {
        const teacher = await TeacherModel.findOne({ where: { username: username } });
        return teacher;
    }
    
    static async getTeacherById(id) {
        const teacher = await TeacherModel.findOne({ where: { id: id } });
        return teacher;
    }

}

module.exports = TeacherRepository;