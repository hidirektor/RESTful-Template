const AuthService = require('../../services/authService');
const { handleError } = require('../../utils/errorUtil');

/**
 * @swagger
 * /auth/resetPass:
 *   post:
 *     summary: Reset user password
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
 *               newPassword:
 *                 type: string
 *     responses:
 *       200:
 *         description: Password reset successfully
 *       400:
 *         description: Invalid request
 *       500:
 *         description: Internal server error
 */

module.exports = async (req, res) => {
    const { phoneNumber, newPassword } = req.body;

    try {
        const user = await AuthService.resetPassword(phoneNumber, newPassword);
        res.json(user);
    } catch (error) {
        handleError(res, error);
    }
};
