const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const MerchantsOrders = sequelize.define('MerchantsOrders', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    merchantId: { type: DataTypes.INTEGER },
    carrierName: { type: DataTypes.STRING },
    marketplaceName: { type: DataTypes.STRING },
    marketplaceOrderID: { type: DataTypes.STRING },
    isPaid: { type: DataTypes.BOOLEAN },
    orderStatus: { type: DataTypes.STRING },
    customerNameSurname: { type: DataTypes.STRING },
    customerPhoneNumber: { type: DataTypes.STRING },
    customerAddress: { type: DataTypes.STRING }
}, {
    timestamps: false,
    tableName: 'MerchantsOrders',
    charset: 'utf8',
    collate: 'utf8_general_ci'
});

module.exports = MerchantsOrders;