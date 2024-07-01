const OTPService = require('../../services/otpService');
const { handleError } = require('../../utils/errorUtil');

/**
 * @swagger
 * /otp/sendSMS:
 *   post:
 *     summary: Send OTP via SMS
 *     tags: [OTP]
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
 *         description: OTP sent successfully
 *       500:
 *         description: Internal server error
 */

module.exports = async (req, res) => {
    const { phoneNumber } = req.body;

    try {
        const result = await OTPService.sendSMS(phoneNumber, req.user.userID);
        res.json(result);
    } catch (error) {
        handleError(res, error);
    }
};
