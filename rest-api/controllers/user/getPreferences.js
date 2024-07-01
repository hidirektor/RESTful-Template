const UserService = require('../../services/userService');
const { handleError } = require('../../utils/errorUtil');

module.exports = async (req, res) => {
    try {
        const userPreferences = await UserService.getPreferences(req.user.userID);
        res.json(userPreferences);
    } catch (error) {
        handleError(res, error);
    }
};
