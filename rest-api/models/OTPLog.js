const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const OTPLog = sequelize.define('OTPLog', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    userID: { type: DataTypes.STRING, unique: true, allowNull: true },
    otpType: { type: DataTypes.STRING, allowNull: true },
    otpCode: { type: DataTypes.STRING, allowNull: true },
    otpSent: {
        type: DataTypes.BIGINT,
        allowNull: true,
        defaultValue: () => Math.floor(Date.now() / 1000)
    },
    otpValidate: {
        type: DataTypes.BIGINT,
        allowNull: true,
        defaultValue: null
    }

}, {
    timestamps: false,
    tableName: 'OTPLog',
    charset: 'utf8',
    collate: 'utf8_general_ci'
});

module.exports = OTPLog;