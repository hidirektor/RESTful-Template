const GenericReqRes = require('../../genericReqRes');
const GenericCRUD = require('../../genericCrud');
const User = require('../../../models/User');

class RegisterController extends GenericReqRes {
    constructor() {
        const crud = new GenericCRUD({ model: User });
        super(crud);
    }
}

module.exports = RegisterController;