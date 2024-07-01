const UserService = require('../../services/userService');
const { handleError } = require('../../utils/errorUtil');

/**
 * @swagger
 * /user/getProfile:
 *   post:
 *     summary: Get user profile
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               phoneNumber:
 *                 type: string
 *     responses:
 *       200:
 *         description: User profile retrieved successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */

module.exports = async (req, res) => {
    const { phoneNumber } = req.body;

    try {
        const userProfile = await UserService.getProfile(phoneNumber);
        res.json(userProfile);
    } catch (error) {
        handleError(res, error);
    }
};
