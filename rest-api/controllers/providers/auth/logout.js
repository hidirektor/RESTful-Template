const GenericReqRes = require('../../genericReqRes');
const GenericCRUD = require('../../genericCrud');
const RefreshToken = require('../../../models/RefreshToken');

class LogoutController extends GenericReqRes {
    constructor() {
        const crud = new GenericCRUD({ model: RefreshToken });
        super(crud);
    }
}

module.exports = LogoutController;