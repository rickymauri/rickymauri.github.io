const questionModel = require('../models/question');

class QuestionRepository {

    static async createQuestion(text, formId) {
        const question = await questionModel.create({
            text: text,
            formId: formId
        });
        return question;
    }

    static async getQuestionById(id) {
        const question = await questionModel.findOne({ where: { id: id } });
        return question;
    }

    static async getQuestionByFormId(formId) {
        const question = await questionModel.findOne({ where: { formId: formId } });
        return question;
    }

    static async incrementNumberOfLikes(questionId) {
        const question = await this.getQuestionById(questionId);
        question.numberOfLikes = question.numberOfLikes + 1;
        await question.save();
    }

}

module.exports = QuestionRepository;