const OTPService = require('../../services/otpService');
const { handleError } = require('../../utils/errorUtil');

/**
 * @swagger
 * /otp/verifyOTP:
 *   post:
 *     summary: Verify OTP
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
 *               otpCode:
 *                 type: string
 *               otpSent:
 *                 type: number
 *     responses:
 *       200:
 *         description: OTP verified successfully
 *       400:
 *         description: Invalid OTP code
 *       404:
 *         description: OTP not found
 *       500:
 *         description: Internal server error
 */

module.exports = async (req, res) => {
    const { phoneNumber, otpCode, otpSent } = req.body;

    try {
        const result = await OTPService.verifyOTP(phoneNumber, otpCode, otpSent, req.user.userID);
        res.json(result);
    } catch (error) {
        handleError(res, error);
    }
};
