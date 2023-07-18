const StudentModel = require('../models/student');
const FormModel = require('../models/form');

class StudentRepository {
    
    static async createStudent(username, formId) {
        const student = await StudentModel.create({
            username: username, 
            formId: formId
        });
        return student;
    }

    static async getStudentById(studentId) {
        const student = await StudentModel.findOne({ where: { id: studentId } });
        return student;
    }

    static async getStudentByUsername(username) {
        const student = await StudentModel.findOne({ where: { username: username } });
        return student;
    }

    static async getStudentByUsernameAndFormCode(username, formCode) {
        const student = await StudentModel.findOne({ where: { username: username }, include: [{
            model: FormModel,
            where: { code : formCode}
        }]});
        return student;
    }

}

module.exports = StudentRepository;