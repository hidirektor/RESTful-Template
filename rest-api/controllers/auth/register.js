const AuthService = require('../../services/authService');
const { handleError } = require('../../utils/errorUtil');

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
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
 *               userType:
 *                 type: string
 *               licenseFrontFace:
 *                 type: string
 *               licenseBackFace:
 *                 type: string
 *               merchantName:
 *                 type: string
 *               merchantAddress:
 *                 type: string
 *               contactNumber:
 *                 type: string
 *     responses:
 *       200:
 *         description: User registered successfully
 *       400:
 *         description: Invalid request
 *       500:
 *         description: Internal server error
 */

module.exports = async (req, res) => {
    try {
        const user = await AuthService.register(req.body);
        res.json(user);
    } catch (error) {
        handleError(res, error);
    }
};
