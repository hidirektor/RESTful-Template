const UserService = require('../../services/userService');
const { handleError } = require('../../utils/errorUtil');

/**
 * @swagger
 * /user/updateRating:
 *   post:
 *     summary: Update user rating
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userRating:
 *                 type: number
 *     responses:
 *       200:
 *         description: Rating updated successfully
 *       404:
 *         description: Rating not found
 *       500:
 *         description: Internal server error
 */

module.exports = async (req, res) => {
    const { userRating } = req.body;

    try {
        const result = await UserService.updateRating(req.user.userID, userRating);
        res.json(result);
    } catch (error) {
        handleError(res, error);
    }
};
