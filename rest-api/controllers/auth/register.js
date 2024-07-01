const AuthService = require('../../services/authService');
const { handleError } = require('../../utils/errorUtil');

module.exports = async (req, res) => {
    try {
        const user = await AuthService.register(req.body);
        res.json(user);
    } catch (error) {
        handleError(res, error);
    }
};
