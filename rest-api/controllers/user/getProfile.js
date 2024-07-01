const UserService = require('../../services/userService');
const { handleError } = require('../../utils/errorUtil');

module.exports = async (req, res) => {
    const { phoneNumber } = req.body;

    try {
        const userProfile = await UserService.getProfile(phoneNumber);
        res.json(userProfile);
    } catch (error) {
        handleError(res, error);
    }
};
