const teacherRepository = require('../repositories/teacherRepository');
const { Errors } = require('../utils/error.utils');

class TeacherServices {

    static async createTeacher(username) {
        try {
            const teacher = await teacherRepository.createTeacher(username);
            return teacher;
        }
        catch (err) {
            throw Errors.invalidUsername();
        }
    }

}

module.exports = TeacherServices;