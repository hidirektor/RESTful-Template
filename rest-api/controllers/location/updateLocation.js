const LocationService = require('../../services/locationService');
const { handleError } = require('../../utils/errorUtil');

module.exports = async (req, res) => {
    try {
        const location = await LocationService.updateLocation(req.body);
        res.json({ message: 'Location updated successfully', location });
    } catch (error) {
        handleError(res, error);
    }
};
