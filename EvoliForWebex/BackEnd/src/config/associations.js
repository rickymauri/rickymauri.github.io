const Teacher = require('../models/teacher');
const Student = require('../models/student');
const Feedback = require('../models/feedback');
const Form = require('../models/form');
const Question = require('../models/question');

Teacher.hasMany(Form);
Form.belongsTo(Teacher);

Form.hasMany(Student); 
Student.belongsTo(Form); 

Student.hasMany(Feedback);
Feedback.belongsTo(Student);

Form.hasMany(Feedback);
Feedback.belongsTo(Form);

Form.hasMany(Question);
Question.belongsTo(Form);
