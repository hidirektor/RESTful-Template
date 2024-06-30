const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

/**
 * @swagger
 * components:
 *   schemas:
 *     OTPLog:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: OTP log ID
 *         userID:
 *           type: string
 *           description: User ID associated with the OTP
 *         otpType:
 *           type: string
 *           description: Type of the OTP
 *         otpCode:
 *           type: string
 *           description: Code of the OTP
 *         otpSent:
 *           type: integer
 *           description: Timestamp when the OTP was sent
 *         otpValidate:
 *           type: integer
 *           description: Timestamp when the OTP was validated
 */

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
