const MerchantService = require('../../services/merchantService');
const Merchants = require('../../models/Merchant');
const CustomError = require('../../utils/customError');

/**
 * @swagger
 * /merchant/updateMerchantAPI:
 *   post:
 *     summary: Update merchant API details
 *     tags: [Merchant]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               phoneNumber:
 *                 type: string
 *               userID:
 *                 type: string
 *               marketplace-API:
 *                 type: object
 *                 properties:
 *                   trendyolSupplierID:
 *                     type: string
 *                   trendyolAPIKey:
 *                     type: string
 *                   trendyolAPISecretKey:
 *                     type: string
 *                   getirYemekMerchantToken:
 *                     type: string
 *                   yemekSepetiUsername:
 *                     type: string
 *                   yemekSepetiPassword:
 *                     type: string
 *     responses:
 *       200:
 *         description: Marketplace API details updated successfully
 *       404:
 *         description: Merchant not found
 *       500:
 *         description: Internal server error
 */

module.exports = async (req, res) => {
    const { phoneNumber, userID, 'marketplace-API': marketplaceAPI } = req.body;

    try {
        console.log(`Received request with userID: ${userID} and phoneNumber: ${phoneNumber}`);

        const merchant = await Merchants.findOne({ where: { userID } });
        if (!merchant) {
            console.log(`Merchant not found for userID: ${userID}`);
            throw new CustomError('Merchant not found', 404);
        }

        console.log(`Merchant found: ${JSON.stringify(merchant)}`);
        const merchantID = merchant.merchantID;

        if (marketplaceAPI.trendyolSupplierID || marketplaceAPI.trendyolAPIKey || marketplaceAPI.trendyolAPISecretKey) {
            await MerchantService.updateTrendyolAPI(merchantID, {
                supplierID: marketplaceAPI.trendyolSupplierID,
                apiKey: marketplaceAPI.trendyolAPIKey,
                apiSecretKey: marketplaceAPI.trendyolAPISecretKey
            });
        }

        if (marketplaceAPI.getirYemekMerchantToken) {
            await MerchantService.updateGetirYemekAPI(merchantID, marketplaceAPI.getirYemekMerchantToken);
        }

        if (marketplaceAPI.yemekSepetiUsername || marketplaceAPI.yemekSepetiPassword) {
            await MerchantService.updateYemekSepetiAPI(merchantID, {
                username: marketplaceAPI.yemekSepetiUsername,
                password: marketplaceAPI.yemekSepetiPassword
            });
        }

        res.status(200).json({ message: 'Marketplace API details updated successfully' });
    } catch (error) {
        console.error('Error occurred:', error);
        res.status(error.status || 500).json({ message: error.message || 'An unexpected error occurred' });
    }
};
