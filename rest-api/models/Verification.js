const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Verification = sequelize.define('Verification', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    userName: { type: DataTypes.STRING },
    otpType: { type: DataTypes.STRING },
    otpCode: { type: DataTypes.STRING },
    otpTime: { type: DataTypes.STRING }
}, {
    timestamps: false,
    charset: 'utf8',
    collate: 'utf8_general_ci'
});

module.exports = Verification;