const LocationService = require('../../services/locationService');
const { handleError } = require('../../utils/errorUtil');

/**
 * @swagger
 * /location/updateLocation:
 *   post:
 *     summary: Update user location
 *     tags: [Location]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userID:
 *                 type: string
 *               latitude:
 *                 type: number
 *               longitude:
 *                 type: number
 *     responses:
 *       200:
 *         description: Location updated successfully
 *       400:
 *         description: Invalid request
 *       500:
 *         description: Internal server error
 */

module.exports = async (req, res) => {
    try {
        const location = await LocationService.updateLocation(req.body);
        res.json({ message: 'Location updated successfully', location });
    } catch (error) {
        handleError(res, error);
    }
};
