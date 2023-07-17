const path = require('path');
const express = require('express');
const rootDir = require('../utils/path');
const {celebrate, Joi} = require('celebrate');
const StudentServices = require('../services/studentServices');
const FeedbackServices = require('../services/feedbackServices');
const studentRouter = express.Router();
const stringCelebrateSchema = Joi.string().min(1).max(255).not(null).required();
const numberCelebrateSchema = Joi.number().min(1).not(null).required();


studentRouter.get('/loginStudent', (req, res, next) => {
    res.sendFile(path.join(rootDir, '../../FrontEnd/testing/HTML', 'loginStudent.html'));
});

studentRouter.post('/homepageStudent', celebrate({
    body: Joi.object().keys({
        username: stringCelebrateSchema,
        formCode: numberCelebrateSchema
    })
}), async (req, res, next) => {
    try {
        const {username, formCode} = req.body;  
        await StudentServices.createStudent(username, formCode);/* 
        return res.json({
            status: 'success'
        }) */
        res.sendFile(path.join(rootDir, '../../FrontEnd/testing/HTML', 'homepageStudent.html')); // Will be removed
    } catch (err) {
        next(err);
    }
});

studentRouter.post('/createFeedback', celebrate({
    body: Joi.object().keys({
        understandingValue: Joi.number().min(1).max(3).not(null).required(),
        motivationValue: numberCelebrateSchema,
        motivationText: stringCelebrateSchema,
        studentId: numberCelebrateSchema,
        formId: numberCelebrateSchema
    })
}), async (req, res, next) => {
    try  {
        const {understandingValue, motivationValue, motivationText, studentId, formId} = req.body;
        await FeedbackServices.createFeedback(understandingValue, motivationValue, motivationText, studentId, formId);/* 
        return res.json({
            status: 'success'
        }) */
        res.sendFile(path.join(rootDir, '../../FrontEnd/testing/HTML', 'feedbackResult.html')); // Will be removed
    } catch (err) {
        next(err);
    }
});

module.exports = studentRouter;