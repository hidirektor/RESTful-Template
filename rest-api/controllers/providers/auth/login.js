const GenericReqRes = require('../../genericReqRes');
const GenericCRUD = require('../../genericCrud');
const User = require('../../../models/User');
const AuthService = require('../../services/authService');

class LoginController extends GenericReqRes {
    constructor() {
        const crud = new GenericCRUD({ model: User });
        super(crud);
    }

    async create(req, res) {
        try {
            const result = await AuthService.login(req.body);
            res.status(HttpStatusCode.OK).json({ 'status': true, 'results': result });
        } catch (err) {
            res.status(err.status || HttpStatusCode.INTERNAL_SERVER_ERROR).send(err.message);
        }
    }
}

module.exports = LoginController;