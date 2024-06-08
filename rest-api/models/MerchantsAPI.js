const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const MerchantsAPI = sequelize.define('MerchantsAPI', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    merchantID: { type: DataTypes.STRING, unique: true, allowNull: false },
    trendyolSupplierID: { type: DataTypes.STRING, allowNull: true },
    trendyolAPIKey: { type: DataTypes.STRING, allowNull: true },
    trendyolAPISecretKey: { type: DataTypes.STRING, allowNull: true },
    getirYemekMerchantToken: { type: DataTypes.STRING, allowNull: true },
    yemekSepetiUsername: { type: DataTypes.STRING, allowNull: true },
    yemekSepetiPassword: { type: DataTypes.STRING, allowNull: true },
    yemekSepetiGeneratedToken: { type: DataTypes.STRING, allowNull: true }
}, {
    timestamps: false,
    tableName: 'MerchantsAPI',
    charset: 'utf8',
    collate: 'utf8_general_ci'
});

module.exports = MerchantsAPI;