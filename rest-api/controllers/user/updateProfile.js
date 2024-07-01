const UserService = require('../../services/userService');
const { handleError } = require('../../utils/errorUtil');

module.exports = async (req, res) => {
    const { phoneNumber, userData, userDocumentsData, userPreferencesData } = req.body;

    try {
        const result = await UserService.updateProfile(phoneNumber, userData, userDocumentsData, userPreferencesData);
        res.json(result);
    } catch (error) {
        handleError(res, error);
    }
};
