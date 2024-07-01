const jwt = require('jsonwebtoken');
const RefreshToken = require('../../models/RefreshToken');
const { generateAccessToken } = require('../../config/jwt');
const { handleError } = require('../../utils/errorUtil');

/**
 * @swagger
 * /token/refreshToken:
 *   post:
 *     summary: Refresh access token
 *     tags: [Token]
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
 *         description: Access token refreshed successfully
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       500:
 *         description: Internal server error
 */

module.exports = async (req, res) => {
    const { token } = req.body;

    if (!token) return res.sendStatus(401);

    try {
        const refreshToken = await RefreshToken.findOne({ where: { token } });
        if (!refreshToken) return res.sendStatus(403);

        const user = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
        const newAccessToken = generateAccessToken({ userID: user.userID });

        res.json({ accessToken: newAccessToken });
    } catch (error) {
        handleError(res, error);
    }
};
