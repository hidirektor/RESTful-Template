const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const VerificationOrder = sequelize.define('VerificationOrder', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    carrierUserName: { type: DataTypes.STRING },
    customerName: { type: DataTypes.STRING },
    customerPhoneNumber: { type: DataTypes.STRING },
    customerAddress: { type: DataTypes.STRING },
    otpType: { type: DataTypes.STRING },
    otpCode: { type: DataTypes.STRING },
    otpTime: { type: DataTypes.STRING }
}, {
    timestamps: false,
    charset: 'utf8',
    collate: 'utf8_general_ci'
});

module.exports = VerificationOrder;