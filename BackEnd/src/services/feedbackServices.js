const FeedbackRepository = require('../repositories/feedbackRepository');
const StudentServices = require('./studentServices');
const FormServices = require('./formServices');
const { Errors } = require('../utils/error.utils');
const FormRepository = require('../repositories/formRepository');

class FeedbackServices {

    static async createFeedback(understandingValue, complexityValue, explainationValue, studentId, formId) {
        try {
            await checkStudentIdValidity(studentId);
            await checkFormIdValidity(formId);
            await checkIfFeedbackAlreadyExists(studentId, formId);
            await checkIfFormIsClosed(formId);
            await FeedbackRepository.createFeedback(understandingValue, complexityValue, explainationValue, studentId, formId);
        }
        catch (err) {
            throw err;
        }
    }

    static async getFeedbacksByFormId(formId) {
        try {
            await checkFormIdValidity(formId);
            return await FeedbackRepository.getFeedbacksByFormId(formId);
        }
        catch (err) {
            throw err; 
        }
    }

}

async function checkFormIdValidity(formId) {
    try {
        const form = await FormServices.getFormById(formId);
        if (!form)
            throw Errors.invalidFormId();
    }
    catch (err) {
        throw err;
    }
}


async function checkStudentIdValidity(studentId) {
    try {
        const student = await StudentServices.getStudentById(studentId);
        if (!student)
            throw Errors.invalidStudentId();
    }
    catch (err) {
        throw err;
    }
}

async function checkIfFeedbackAlreadyExists(studentId, formId) {
    try {
        const feedback = await FeedbackRepository.getFeedbackByStudentIdAndFormId(studentId, formId);
        if (feedback)
            throw Errors.feedbackAlreadyExists(); 
    }
    catch (err) {
        throw err;
    }
}

async function checkIfFormIsClosed(formId) {
    try {
        const isClosed = FormRepository.isFormClosed(formId);
        if (isClosed === 'true')
            throw Errors.formIsClosed();
    }
    catch (err) {
        throw err;
    }
}

module.exports = FeedbackServices;