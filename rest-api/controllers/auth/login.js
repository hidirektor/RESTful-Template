const AuthService = require('../../services/authService');
const { handleError } = require('../../utils/errorUtil');

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login user
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
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 *       400:
 *         description: Invalid request
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

module.exports = async (req, res) => {
    const { phoneNumber, password } = req.body;

    try {
        const user = await AuthService.login({ phoneNumber, password });
        res.json(user);
    } catch (error) {
        handleError(res, error);
    }
};
