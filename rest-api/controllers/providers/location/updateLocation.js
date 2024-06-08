const GenericReqRes = require('../../genericReqRes');
const GenericCRUD = require('../../genericCrud');
const UserLocation = require('../../../models/UserLocation');

class UpdateLocationController extends GenericReqRes {
    constructor() {
        const crud = new GenericCRUD({ model: UserLocation });
        super(crud);
    }
}

module.exports = UpdateLocationController;