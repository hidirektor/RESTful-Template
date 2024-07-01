const UserService = require('../../services/userService');
const { handleError } = require('../../utils/errorUtil');

/**
 * @swagger
 * /user/updatePreferences:
 *   post:
 *     summary: Update user preferences
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
 *               preferencesData:
 *                 type: object
 *     responses:
 *       200:
 *         description: Preferences updated successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */

module.exports = async (req, res) => {
    const { phoneNumber, preferencesData } = req.body;

    try {
        const result = await UserService.updatePreferences(phoneNumber, preferencesData);
        res.json(result);
    } catch (error) {
        handleError(res, error);
    }
};
