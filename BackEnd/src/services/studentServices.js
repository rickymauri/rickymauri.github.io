const studentRepository = require('../repositories/studentRepository');
const formRepository = require('../repositories/formRepository');
const { Errors } = require('../utils/error.utils');

class StudentServices {

    static async createStudent(username, formCode) {
        try {
            await checkLoginValidity(username, formCode); 
            const formId = await formRepository.getFormIdByCode(formCode);
            const student = await studentRepository.createStudent(username, formId);
            return student;
        }

        catch (err) {
            throw err;
        }
    }

    static async getStudentById(studentId) {
        try {
            const student = await studentRepository.getStudentById(studentId);
            return student;
        }
        catch (err) {
            throw err;
        }
    }

}

async function checkLoginValidity(username, formCode) {
    try {
        await checkFormValidity(formCode);
        //await checkUsernameAvailability(username, formCode); // At the moment we can have multiple students with the same username
    }
    catch (err) {
        throw err;
    }
}

async function checkUsernameAvailability(username, formCode) {
    try {
        const student = await studentRepository.getStudentByUsernameAndFormCode(username, formCode);
        if (student)
            throw Errors.usernameAlreadyInUse();
    }
    catch (err) {
        throw err;
    }
}

async function checkFormValidity(formCode) {
    try {
        const form = await formRepository.getFormByCode(formCode);
        if (!form)
            throw Errors.formNotFound();
    }
    catch (err) {
        throw err;
    }

}

module.exports = StudentServices;