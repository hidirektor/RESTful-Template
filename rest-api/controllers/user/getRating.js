const UserService = require('../../services/userService');
const { handleError } = require('../../utils/errorUtil');

module.exports = async (req, res) => {
    try {
        const userRating = await UserService.getRating(req.user.userID);
        res.json(userRating);
    } catch (error) {
        handleError(res, error);
    }
};
