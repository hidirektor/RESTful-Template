const AuthService = require('../../services/authService');
const { handleError } = require('../../utils/errorUtil');

/**
 * @swagger
 * /auth/changePass:
 *   post:
 *     summary: Change user password
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               phoneNumber:
 *                 type: string
 *               oldPassword:
 *                 type: string
 *               newPassword:
 *                 type: string
 *     responses:
 *       200:
 *         description: Password changed successfully
 *       400:
 *         description: Invalid request
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

module.exports = async (req, res) => {
    const { phoneNumber, oldPassword, newPassword } = req.body;

    try {
        const user = await AuthService.changePassword(req.user.userID, oldPassword, newPassword);
        res.json(user);
    } catch (error) {
        handleError(res, error);
    }
};
