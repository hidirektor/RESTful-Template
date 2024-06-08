const GenericReqRes = require('../../genericReqRes');
const GenericCRUD = require('../../genericCrud');
const AuthService = require('../../services/authService');
const User = require('../../../models/User');

class ResetPassController extends GenericReqRes {
    constructor() {
        const crud = new GenericCRUD({ model: User });
        super(crud);
    }

    async create(req, res) {
        try {
            const result = await AuthService.resetPassword(req.body.phoneNumber, req.body.newPassword);
            res.status(HttpStatusCode.OK).json({ 'status': true, 'result': result });
        } catch (err) {
            res.status(err.status || HttpStatusCode.INTERNAL_SERVER_ERROR).send(err.message);
        }
    }
}

module.exports = ResetPassController;