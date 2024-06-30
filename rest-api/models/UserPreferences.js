const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

/**
 * @swagger
 * components:
 *   schemas:
 *     UserPreferences:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Preference ID
 *         userID:
 *           type: string
 *           description: Unique user ID
 *         nightMode:
 *           type: boolean
 *           description: Whether night mode is enabled
 *         selectedLanguage:
 *           type: string
 *           description: User's selected language
 *         firstBreakTime:
 *           type: string
 *           format: date-time
 *           description: First break time of the user
 *         secondBreakTime:
 *           type: string
 *           format: date-time
 *           description: Second break time of the user
 */

const UserPreferences = sequelize.define('UserPreferences', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, index: true },
    userID: { type: DataTypes.STRING, unique: true, allowNull: false },
    nightMode: { type: DataTypes.BOOLEAN, defaultValue: false },
    selectedLanguage: { type: DataTypes.STRING, defaultValue: "tr" },
    firstBreakTime: { type: DataTypes.DATE, allowNull: true, defaultValue: DataTypes.NOW },
    secondBreakTime: { type: DataTypes.DATE, allowNull: true, defaultValue: DataTypes.NOW }
}, {
    timestamps: false,
    tableName: 'UserPreferences',
    charset: 'utf8',
    collate: 'utf8_general_ci'
});

module.exports = UserPreferences;
