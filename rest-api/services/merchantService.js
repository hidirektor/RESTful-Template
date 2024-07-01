const axios = require('axios');
const MerchantsAPI = require('../models/MerchantsAPI');
const CustomError = require('../utils/customError');

class MerchantService {
    static async getTrendyolAPI(merchantID) {
        const merchantAPI = await MerchantsAPI.findOne({ where: { merchantID } });
        if (!merchantAPI) throw new CustomError('Merchant not found', 404);

        return {
            supplierID: merchantAPI.trendyolSupplierID,
            apiKey: merchantAPI.trendyolAPIKey,
            apiSecretKey: merchantAPI.trendyolAPISecretKey,
        };
    }

    static async updateTrendyolAPI(merchantID, apiData) {
        const [merchantAPI, created] = await MerchantsAPI.findOrCreate({
            where: { merchantID },
            defaults: {
                trendyolSupplierID: apiData.supplierID,
                trendyolAPIKey: apiData.apiKey,
                trendyolAPISecretKey: apiData.apiSecretKey,
            }
        });

        if (!created) {
            await merchantAPI.update({
                trendyolSupplierID: apiData.supplierID,
                trendyolAPIKey: apiData.apiKey,
                trendyolAPISecretKey: apiData.apiSecretKey,
            });
        }

        return { message: 'Trendyol API updated successfully' };
    }

    static async getGetirYemekAPI(merchantID) {
        const merchantAPI = await MerchantsAPI.findOne({ where: { merchantID } });
        if (!merchantAPI) throw new CustomError('Merchant not found', 404);

        return { merchantToken: merchantAPI.getirYemekMerchantToken };
    }

    static async updateGetirYemekAPI(merchantID, token) {
        const [merchantAPI, created] = await MerchantsAPI.findOrCreate({
            where: { merchantID },
            defaults: {
                getirYemekMerchantToken: token,
            }
        });

        if (!created) {
            await merchantAPI.update({ getirYemekMerchantToken: token });
        }

        return { message: 'Getir Yemek API updated successfully' };
    }

    static async getYemekSepetiAPI(merchantID) {
        const merchantAPI = await MerchantsAPI.findOne({ where: { merchantID } });
        if (!merchantAPI) throw new CustomError('Merchant not found', 404);

        return {
            username: merchantAPI.yemekSepetiUsername,
            generatedToken: merchantAPI.yemekSepetiGeneratedToken,
        };
    }

    static async updateYemekSepetiAPI(merchantID, loginData) {
        const loginResponse = await axios.post('https://integration-middleware.eu.restaurant-partners.com/v2/login', null, {
            params: {
                username: loginData.username,
                password: loginData.password,
                grant_type: 'client_credentials'
            }
        });

        if (loginResponse.status !== 200) {
            throw new CustomError('Yemeksepeti login failed', 401);
        }

        const { access_token, expires_in } = loginResponse.data;

        const [merchantAPI, created] = await MerchantsAPI.findOrCreate({
            where: { merchantID },
            defaults: {
                yemekSepetiGeneratedToken: access_token,
                yemekSepetiUsername: loginData.username,
                yemekSepetiPassword: loginData.password,
                yemekSepetiExpiresStart: new Date(),
                yemekSepetiExpiresEnd: new Date(Date.now() + expires_in * 1000)
            }
        });

        if (!created) {
            await merchantAPI.update({
                yemekSepetiGeneratedToken: access_token,
                yemekSepetiUsername: loginData.username,
                yemekSepetiPassword: loginData.password,
                yemekSepetiExpiresStart: new Date(),
                yemekSepetiExpiresEnd: new Date(Date.now() + expires_in * 1000)
            });
        }

        return { message: 'Yemeksepeti API updated successfully' };
    }
}

module.exports = MerchantService;
