const OTPService = require('../../services/otpService');
const { handleError } = require('../../utils/errorUtil');

/**
 * @swagger
 * /otp/sendMail:
 *   post:
 *     summary: Send OTP via email
 *     tags: [OTP]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: OTP sent successfully
 *       500:
 *         description: Internal server error
 */

module.exports = async (req, res) => {
    const { email } = req.body;

    try {
        const result = await OTPService.sendMail(email, req.user.userID);
        res.json(result);
    } catch (error) {
        handleError(res, error);
    }
};
