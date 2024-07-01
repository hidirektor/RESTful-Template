const OTPService = require('../../services/otpService');
const { handleError } = require('../../utils/errorUtil');

module.exports = async (req, res) => {
    const { phoneNumber, otpCode, otpSent } = req.body;

    try {
        const result = await OTPService.verifyOTP(phoneNumber, otpCode, otpSent, req.user.userID);
        res.json(result);
    } catch (error) {
        handleError(res, error);
    }
};
