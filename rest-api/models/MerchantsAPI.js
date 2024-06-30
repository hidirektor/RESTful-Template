const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const MerchantsAPI = sequelize.define('MerchantsAPI', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    ownerName: { type: DataTypes.STRING, unique: true },
    trendyolSupplierID: { type: DataTypes.STRING },
    trendyolAPIKey: { type: DataTypes.STRING },
    trendyolAPISecretKey: { type: DataTypes.STRING },
    getirYemekMerchantToken: { type: DataTypes.STRING },
    yemekSepetiUsername: { type: DataTypes.STRING },
    yemekSepetiPassword: { type: DataTypes.STRING },
    yemekSepetiGeneratedToken: { type: DataTypes.STRING }
}, {
    timestamps: false,
    charset: 'utf8',
    collate: 'utf8_general_ci'
});

module.exports = MerchantsAPI;