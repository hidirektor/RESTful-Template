const UserService = require('../../services/userService');
const { handleError } = require('../../utils/errorUtil');

/**
 * @swagger
 * /user/getPreferences:
 *   get:
 *     summary: Get user preferences
 *     tags: [User]
 *     responses:
 *       200:
 *         description: User preferences retrieved successfully
 *       404:
 *         description: Preferences not found
 *       500:
 *         description: Internal server error
 */

module.exports = async (req, res) => {
    try {
        const userPreferences = await UserService.getPreferences(req.user.userID);
        res.json(userPreferences);
    } catch (error) {
        handleError(res, error);
    }
};
