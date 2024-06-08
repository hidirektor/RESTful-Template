const GenericReqRes = require('../../genericReqRes');
const GenericCRUD = require('../../genericCrud');
const UserPreferences = require('../../../models/UserPreferences');
const UserService = require('../../services/userService');

class GetPreferencesController extends GenericReqRes {
    constructor() {
        const crud = new GenericCRUD({ model: UserPreferences });
        super(crud);
    }

    async findOne(req, res) {
        try {
            const result = await UserService.getPreferences(req.user.userID);
            res.status(HttpStatusCode.OK).json({ 'status': true, 'result': result });
        } catch (err) {
            res.status(err.status || HttpStatusCode.INTERNAL_SERVER_ERROR).send(err.message);
        }
    }
}

module.exports = GetPreferencesController;