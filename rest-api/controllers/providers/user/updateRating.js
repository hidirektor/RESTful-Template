const GenericReqRes = require('../../genericReqRes');
const GenericCRUD = require('../../genericCrud');
const UserRating = require('../../../models/UserRating');
const UserService = require('../../services/userService');

class UpdateRatingController extends GenericReqRes {
    constructor() {
        const crud = new GenericCRUD({ model: UserRating });
        super(crud);
    }

    async update(req, res) {
        try {
            const result = await UserService.updateRating(req.user.userID, req.body.userRating);
            res.status(HttpStatusCode.OK).json({ 'status': true, 'result': result });
        } catch (err) {
            res.status(err.status || HttpStatusCode.INTERNAL_SERVER_ERROR).send(err.message);
        }
    }
}

module.exports = UpdateRatingController;