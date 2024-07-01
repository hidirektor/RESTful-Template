const RefreshToken = require('../../models/RefreshToken');
const { handleError } = require('../../utils/errorUtil');

/**
 * @swagger
 * /auth/logout:
 *   post:
 *     summary: Logout user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               token:
 *                 type: string
 *     responses:
 *       200:
 *         description: Logged out successfully
 *       404:
 *         description: Token not found
 *       500:
 *         description: Internal server error
 */

module.exports = async (req, res) => {
    const { token } = req.body;

    try {
        const refreshToken = await RefreshToken.findOne({ where: { token } });
        if (!refreshToken) return res.status(404).json({ message: 'Token not found' });

        await RefreshToken.destroy({ where: { token } });

        res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
        handleError(res, error);
    }
};
