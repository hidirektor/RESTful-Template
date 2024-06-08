const GenericReqRes = require('../../genericReqRes');
const GenericCRUD = require('../../genericCrud');
const User = require('../../../models/User');
const UserService = require('../../services/userService');

class UpdateProfileController extends GenericReqRes {
    constructor() {
        const crud = new GenericCRUD({ model: User });
        super(crud);
    }

    async update(req, res) {
        try {
            const result = await UserService.updateProfile(req.body.userID, req.body.userData, req.body.userDocumentsData);
            res.status(HttpStatusCode.OK).json({ 'status': true, 'result': result });
        } catch (err) {
            res.status(err.status || HttpStatusCode.INTERNAL_SERVER_ERROR).send(err.message);
        }
    }
}

module.exports = UpdateProfileController;