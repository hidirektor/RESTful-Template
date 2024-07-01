const AuthService = require('../../services/authService');
const { handleError } = require('../../utils/errorUtil');

module.exports = async (req, res) => {
    const { phoneNumber, password } = req.body;

    try {
        const user = await AuthService.login({ phoneNumber, password });
        res.json(user);
    } catch (error) {
        handleError(res, error);
    }
};
