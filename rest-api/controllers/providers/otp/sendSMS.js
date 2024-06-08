const GenericReqRes = require('../../genericReqRes');
const GenericCRUD = require('../../genericCrud');
const OTPLog = require('../../../models/OTPLog');
const OTPService = require('../../services/otpService');

class SendSMSController extends GenericReqRes {
    constructor() {
        const crud = new GenericCRUD({ model: OTPLog });
        super(crud);
    }

    async create(req, res) {
        try {
            const result = await OTPService.sendSMS(req.body.phoneNumber, req.user.userID);
            res.status(HttpStatusCode.OK).json({ 'status': true, 'result': result });
        } catch (err) {
            res.status(err.status || HttpStatusCode.INTERNAL_SERVER_ERROR).send(err.message);
        }
    }
}

module.exports = SendSMSController;