const path = require('path');
const express = require('express');
const rootDir = require('../utils/path');
const {celebrate, Joi} = require('celebrate');
const stringCelebrateSchema = Joi.string().min(1).max(255).not(null).required();
const numberCelebrateSchema = Joi.number().min(1).not(null).required();

const teacherServices = require('../services/teacherServices');
const formServices = require('../services/formServices');
const feedbackServices = require('../services/feedbackServices');

const teacherRouter = express.Router();

teacherRouter.get('/loginTeacher', (req, res, next) => {
    res.sendFile(path.join(rootDir, '../../FrontEnd/testing/HTML', 'loginTeacher.html'));
});

teacherRouter.post('/homepageTeacher', celebrate({
    body: Joi.object().keys({
        username: stringCelebrateSchema
    })
}), async (req, res, next) => {
    try {
        const username = req.body.username;
        await teacherServices.createTeacher(username);
/*         return res.json({
            status: 'success'
        }) */
        res.sendFile(path.join(rootDir, '../../FrontEnd/testing/HTML', 'homepageTeacher.html')); // Will be removed
    } catch (err) {
        next(err);
    }
});

teacherRouter.post('/createForm', celebrate({
    body: Joi.object().keys({
        formTitle: stringCelebrateSchema,
        teacherId: numberCelebrateSchema
    })
}), async (req, res, next) => {
    try {
        const {formTitle, teacherId} = req.body;
        await formServices.createForm(formTitle, teacherId);/* 
        return res.json({
            status: 'success'
        }) */
        res.sendFile(path.join(rootDir, '../../FrontEnd/testing/HTML', 'formResult.html')); // Will be removed
    } catch (err) {
        next(err);
    }
});

teacherRouter.get('/formResult', celebrate({
    body: Joi.object().keys({
        formId: numberCelebrateSchema
    })
}), async (req, res, next) => {
    try {
        const formId = req.body.formId;
        await feedbackServices.getFeedbacksByFormId(formId);
        return res.json({
            status: 'success',
            feedbacks: feedbacks
        })
    } catch (err) {
        next(err);
    }   
});



module.exports = teacherRouter;