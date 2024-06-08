const GenericReqRes = require('../../genericReqRes');
const GenericCRUD = require('../../genericCrud');
const User = require('../../../models/User');
const UserService = require('../../services/userService');

class GetProfileController extends GenericReqRes {
    constructor() {
        const crud = new GenericCRUD({ model: User });
        super(crud);
    }

    async findOne(req, res) {
        try {
            const result = await UserService.getProfile(req.body.phoneNumber);
            res.status(HttpStatusCode.OK).json({ 'status': true, 'result': result });
        } catch (err) {
            res.status(err.status || HttpStatusCode.INTERNAL_SERVER_ERROR).send(err.message);
        }
    }
}

module.exports = GetProfileController;