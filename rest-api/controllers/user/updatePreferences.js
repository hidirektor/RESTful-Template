const UserService = require('../../services/userService');
const { handleError } = require('../../utils/errorUtil');

module.exports = async (req, res) => {
    const { phoneNumber, preferencesData } = req.body;

    try {
        const result = await UserService.updatePreferences(phoneNumber, preferencesData);
        res.json(result);
    } catch (error) {
        handleError(res, error);
    }
};
