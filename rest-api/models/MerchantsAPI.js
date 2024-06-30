const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

/**
 * @swagger
 * components:
 *   schemas:
 *     MerchantsAPI:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated ID of the merchant API
 *         merchantID:
 *           type: string
 *           description: The ID of the merchant
 *         trendyolSupplierID:
 *           type: string
 *           description: The supplier ID for Trendyol
 *         trendyolAPIKey:
 *           type: string
 *           description: The API key for Trendyol
 *         trendyolAPISecretKey:
 *           type: string
 *           description: The API secret key for Trendyol
 *         getirYemekMerchantToken:
 *           type: string
 *           description: The merchant token for GetirYemek
 *         yemekSepetiUsername:
 *           type: string
 *           description: The username for YemekSepeti
 *         yemekSepetiPassword:
 *           type: string
 *           description: The password for YemekSepeti
 *         yemekSepetiGeneratedToken:
 *           type: string
 *           description: The generated token for YemekSepeti
 *         yemekSepetiExpiresStart:
 *           type: string
 *           format: date
 *           description: The start date of the token expiration for YemekSepeti
 *         yemekSepetiExpiresEnd:
 *           type: string
 *           format: date
 *           description: The end date of the token expiration for YemekSepeti
 */

const MerchantsAPI = sequelize.define('MerchantsAPI', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    merchantID: { type: DataTypes.STRING, unique: true, allowNull: false },
    trendyolSupplierID: { type: DataTypes.STRING, allowNull: true },
    trendyolAPIKey: { type: DataTypes.STRING, allowNull: true },
    trendyolAPISecretKey: { type: DataTypes.STRING, allowNull: true },
    getirYemekMerchantToken: { type: DataTypes.STRING, allowNull: true },
    yemekSepetiUsername: { type: DataTypes.STRING, allowNull: true },
    yemekSepetiPassword: { type: DataTypes.STRING, allowNull: true },
    yemekSepetiGeneratedToken: { type: DataTypes.STRING, allowNull: true },
    yemekSepetiExpiresStart: { type: DataTypes.DATE, allowNull: true },
    yemekSepetiExpiresEnd: { type: DataTypes.DATE, allowNull: true }
}, {
    timestamps: false,
    tableName: 'MerchantsAPI',
    charset: 'utf8',
    collate: 'utf8_general_ci'
});

module.exports = MerchantsAPI;
