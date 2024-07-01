const OTPService = require('../../services/otpService');
const { handleError } = require('../../utils/errorUtil');

module.exports = async (req, res) => {
    const { email } = req.body;

    try {
        const result = await OTPService.sendMail(email, req.user.userID);
        res.json(result);
    } catch (error) {
        handleError(res, error);
    }
};
