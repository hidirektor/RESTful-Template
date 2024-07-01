const AuthService = require('../../services/authService');
const { handleError } = require('../../utils/errorUtil');

module.exports = async (req, res) => {
    const { phoneNumber, newPassword } = req.body;

    try {
        const user = await AuthService.resetPassword(phoneNumber, newPassword);
        res.json(user);
    } catch (error) {
        handleError(res, error);
    }
};
