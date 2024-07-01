const UserService = require('../../services/userService');
const { handleError } = require('../../utils/errorUtil');

/**
 * @swagger
 * /user/getRating:
 *   get:
 *     summary: Get user rating
 *     tags: [User]
 *     responses:
 *       200:
 *         description: User rating retrieved successfully
 *       404:
 *         description: Rating not found
 *       500:
 *         description: Internal server error
 */

module.exports = async (req, res) => {
    try {
        const userRating = await UserService.getRating(req.user.userID);
        res.json(userRating);
    } catch (error) {
        handleError(res, error);
    }
};
