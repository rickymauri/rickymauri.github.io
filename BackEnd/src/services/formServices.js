const FormRepository = require('../repositories/formRepository');
const TeacherRepository = require('../repositories/teacherRepository');
const FeedbackRepository = require('../repositories/feedbackRepository');
const { Errors } = require('../utils/error.utils');

class FormService {
    
    static async createForm(title, teacherId) {

        try {
            await checkTeacherIdValidity(teacherId);
            const form = await FormRepository.createForm(title, teacherId);
            return form;
        }
        catch (err) {
            throw err;
        }
    }

    static async getFormById(id) {
        const form = await FormRepository.getFormById(id);
        return form;
    }

    static async getFormByCode(code) {
        const form = await FormRepository.getFormByCode(code);
        return form;
    }

    static async getFormIdByCode(code) {
        const id = await FormRepository.getIdFormByCode(code);
        return id;
    }

    static async getFormCodeById(id) {
        const formCode = await FormRepository.getFormCodeById(id);
        return formCode;
    }

    static async getFormResults(id) {
        const feedbacks = await FeedbackRepository.getFeedbacksByFormId(id);
        const fields = ['understandingValue', 'complexityValue', 'explainationValue'];
        let results = {};
        if(feedbacks.length >= 1) {
            for (let feedback of feedbacks) {
                for (let field of fields) {
                    const fieldValue = feedback[field];
                    if (!results[field]) {
                        results[field] = {
                            1: 0,
                            2: 0,
                            3: 0
                        };
                    }
                    results[field][fieldValue]++;
                }
            }
        }
        else {
            for (let field of fields) {
                results[field] = {
                    1: 0,
                    2: 0,
                    3: 0
                };
            }
        }
        results.boolean = true;
        for (let field of fields) {
            results[field] = Object.values(results[field]);
        }
        return results;
    }

    static async closeForm(id) {
        try {
            await checkFormIdValidity(id);
            await FormRepository.closeForm(id);
        }
        catch (err) {
            throw err;
        }
    }

    static async isFormClosed(id) {
        const isClosed = await FormRepository.isFormClosed(id);
        return isClosed;
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

async function checkTeacherIdValidity(teacherId) {
    try {
        const teacher = await TeacherRepository.getTeacherById(teacherId);
        if (!teacher)
            throw Errors.invalidTeacherId();
    }
    catch (err) {
        throw err;
    }
}

module.exports = FormService;