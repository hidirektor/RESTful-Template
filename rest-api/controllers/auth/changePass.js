const AuthService = require('../../services/authService');
const { handleError } = require('../../utils/errorUtil');

module.exports = async (req, res) => {
    const { phoneNumber, oldPassword, newPassword } = req.body;

    try {
        const user = await AuthService.changePassword(req.user.userID, oldPassword, newPassword);
        res.json(user);
    } catch (error) {
        handleError(res, error);
    }
};
