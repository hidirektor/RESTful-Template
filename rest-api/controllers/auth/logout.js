const RefreshToken = require('../../models/RefreshToken');
const { handleError } = require('../../utils/errorUtil');

module.exports = async (req, res) => {
    const { token } = req.body;

    try {
        const refreshToken = await RefreshToken.findOne({ where: { token } });
        if (!refreshToken) return res.status(404).json({ message: 'Token not found' });

        await RefreshToken.destroy({ where: { token } });

        res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
        handleError(res, error);
    }
};
