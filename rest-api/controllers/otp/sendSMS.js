const OTPService = require('../../services/otpService');
const { handleError } = require('../../utils/errorUtil');

module.exports = async (req, res) => {
    const { phoneNumber } = req.body;

    try {
        const result = await OTPService.sendSMS(phoneNumber, req.user.userID);
        res.json(result);
    } catch (error) {
        handleError(res, error);
    }
};
