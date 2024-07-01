const UserService = require('../../services/userService');
const { handleError } = require('../../utils/errorUtil');

module.exports = async (req, res) => {
    const { userRating } = req.body;

    try {
        const result = await UserService.updateRating(req.user.userID, userRating);
        res.json(result);
    } catch (error) {
        handleError(res, error);
    }
};
