const Merchants = require('../../models/Merchant');
const MerchantsAPI = require('../../models/MerchantsAPI');
const CustomError = require('../../utils/customError');

module.exports = async (req, res) => {
    const { phoneNumber, userID } = req.body;

    try {
        // Check if the merchant exists
        const merchant = await Merchants.findOne({ where: { userID, contactNumber: phoneNumber } });
        if (!merchant) {
            throw new CustomError('Merchant not found', 404);
        }
        const merchantID = merchant.merchantID;

        // Get the merchant API details
        const merchantAPI = await MerchantsAPI.findOne({ where: { merchantID } });
        if (!merchantAPI) {
            throw new CustomError('Merchant API details not found', 404);
        }

        res.status(200).json(merchantAPI);
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || 'An unexpected error occurred' });
    }
};
