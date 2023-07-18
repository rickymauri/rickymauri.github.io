const feedbackModel = require('../models/feedback');

class FeedbackRepository {

    static async createFeedback(understandingValue, complexityValue, explainationValue, studentId, formId) {
        const feedback = await feedbackModel.create({
            understandingValue: understandingValue,
            complexityValue: complexityValue,
            explainationValue: explainationValue,
            studentId: studentId,
            formId: formId
        });
        return feedback;
    }

    static async getFeedbacksByFormId(formId) {
        return await feedbackModel.findAll({
            where: {
                formId: formId
            }
        });
    }

    static async getFeedbackByStudentIdAndFormId(studentId, formId) {
        return await feedbackModel.findOne({
            where: {
                studentId: studentId,
                formId: formId
            }
        });
    }

}

module.exports = FeedbackRepository;