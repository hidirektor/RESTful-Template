const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: User ID
 *         userID:
 *           type: string
 *           description: Unique user ID
 *         userName:
 *           type: string
 *           description: User's username
 *         eMail:
 *           type: string
 *           description: User's email address
 *         userType:
 *           type: string
 *           description: Type of the user
 *         NameSurname:
 *           type: string
 *           description: User's full name
 *         phoneNumber:
 *           type: string
 *           description: User's phone number
 *         address:
 *           type: string
 *           description: User's address
 *         password:
 *           type: string
 *           description: User's password
 *         profilePhoto:
 *           type: string
 *           description: URL of the user's profile photo
 *         relativeNameSurname:
 *           type: string
 *           description: Name and surname of the user's relative
 *         relativePhoneNumber:
 *           type: string
 *           description: Phone number of the user's relative
 *         registeredMerchant:
 *           type: string
 *           description: Registered merchant of the user
 *         lastPasswordChange:
 *           type: integer
 *           description: Timestamp of the last password change
 *         createdAt:
 *           type: integer
 *           description: Timestamp of user creation
 */

const User = sequelize.define('Users', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    userID: { type: DataTypes.STRING, unique: true, allowNull: false },
    userName: { type: DataTypes.STRING, unique: true, allowNull: false },
    eMail: { type: DataTypes.STRING, unique: true, allowNull: false },
    userType: { type: DataTypes.STRING, allowNull: false },
    NameSurname: { type: DataTypes.STRING, allowNull: false },
    phoneNumber: { type: DataTypes.STRING, allowNull: false },
    address: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    profilePhoto: { type: DataTypes.TEXT, allowNull: false },
    relativeNameSurname: { type: DataTypes.STRING, allowNull: true },
    relativePhoneNumber: { type: DataTypes.STRING, allowNull: true },
    registeredMerchant: { type: DataTypes.STRING, allowNull: true },
    lastPasswordChange: {
        type: DataTypes.BIGINT,
        allowNull: true
    },
    createdAt: {
        type: DataTypes.BIGINT,
        defaultValue: () => Math.floor(Date.now() / 1000)
    }
}, {
    timestamps: false,
    tableName: 'Users',
    charset: 'utf8',
    collate: 'utf8_general_ci'
});

module.exports = User;
