const QuestionRepository = require('../repositories/questionRepository');
const FormRepository = require('../repositories/formRepository');
const { Errors } = require('../utils/error.utils');

class QuestionService {
    
    static async createQuestion(text, formId) {
        try {
            await checkFormIdValidity(formId);
            await checkIfFormIsClosed(formId);
            const question = await QuestionRepository.createQuestion(text, formId);
            return question;
        }
        catch (err) {
            throw err;
        }
    }

    static async getQuestionById(id) {
        const question = await QuestionRepository.getQuestionById(id);
        return question;
    }

    static async getQuestionByFormId(formId) {
        const question = await QuestionRepository.getQuestionByFormId(formId);
        return question;
    }

    static async incrementNumberOfLikes(questionId) {
        try {
            await checkQuestionIdValidity(questionId);
            const question = await QuestionRepository.getQuestionById(questionId);
            const formId = question.formId;
            await checkIfFormIsClosed(formId);
            await QuestionRepository.incrementNumberOfLikes(questionId);
        }
        catch (err) {
            throw err;
        }
    }

    // Gets only the main fields of a question (questionId, text, numberOfLikes)
    static async getQuestionMainFields(questionId) {
        try {
            await checkQuestionIdValidity(questionId);
            const questionComplete = await QuestionRepository.getQuestionById(questionId);
            const question = {
                questionId: questionComplete.id,
                text: questionComplete.text,
                numberOfLikes: questionComplete.numberOfLikes
            };
            return question;
        }
        catch (err) {
            throw err;
        }
    }
}

async function checkFormIdValidity(formId) {
    try {
        const form = await FormRepository.getFormById(formId);
        if (!form)
            throw Errors.invalidFormId();
    }
    catch (err) {
        throw err;
    }
}

async function checkQuestionIdValidity(questionId) {
    try {
        const question = await QuestionRepository.getQuestionById(questionId);
        if (!question)
            throw Errors.invalidQuestionId();
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

module.exports = QuestionService;