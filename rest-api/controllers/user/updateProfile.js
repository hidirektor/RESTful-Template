const UserService = require('../../services/userService');
const { handleError } = require('../../utils/errorUtil');

/**
 * @swagger
 * /user/updateProfile:
 *   post:
 *     summary: Update user profile
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
 *               userData:
 *                 type: object
 *               userDocumentsData:
 *                 type: object
 *               userPreferencesData:
 *                 type: object
 *     responses:
 *       200:
 *         description: Profile updated successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */

module.exports = async (req, res) => {
    const { phoneNumber, userData, userDocumentsData, userPreferencesData } = req.body;

    try {
        const result = await UserService.updateProfile(phoneNumber, userData, userDocumentsData, userPreferencesData);
        res.json(result);
    } catch (error) {
        handleError(res, error);
    }
};
