const formModel = require('../models/form');

class FormRepository {

    static async createForm(title, teacherId) {
        let code = generateCode();
        while (await this.getFormByCode(code)) { // Check if code is already in use
            code = generateCode();
        }
        const form = await formModel.create({
            title: title,
            teacherId: teacherId,
            code: code
        });
        return form;
    }

    static async getFormById(id) {
        const form = await formModel.findOne({ where: {id: id} });
        return form;
    }

    static async getFormByTeacherId(teacherId) {
        const form = await formModel.findOne({ where: {teacherId: teacherId} });
        return form;
    }

    static async getFormByCode(code) {
        const form = await formModel.findOne({ where: {code: code} });
        return form;
    }

    static async getFormIdByCode(code) {
        const form = await formModel.findOne({ where: {code: code} });
        const id = form.id;  
        return id;
    }

    static async getFormCodeById(id) {
        const form = await formModel.findOne({ where: {id: id} });
        const formCode = form.code;
        return formCode;
    }
    
    static async closeForm(id) {
        await formModel.update({ isClosed: true }, { where: {id: id} });
    }

    static async isFormClosed(id) {
        const form = await formModel.findOne({ where: {id: id} });
        const isClosed = form.isClosed;
        return isClosed;
    }
}

function generateCode() {
    code = Math.floor(Math.random() * 100000);
    return code;
}

module.exports = FormRepository;