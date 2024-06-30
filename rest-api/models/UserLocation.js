const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

/**
 * @swagger
 * components:
 *   schemas:
 *     UserLocation:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Location ID
 *         userID:
 *           type: string
 *           description: Unique user ID
 *         latitude:
 *           type: number
 *           format: float
 *           description: Latitude of the user's location
 *         longitude:
 *           type: number
 *           format: float
 *           description: Longitude of the user's location
 *         timestamp:
 *           type: integer
 *           description: Timestamp of the location record
 */

const UserLocation = sequelize.define('UserLocation', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    userID: { type: DataTypes.STRING, unique: true, allowNull: false },
    latitude: { type: DataTypes.FLOAT, allowNull: false },
    longitude: { type: DataTypes.FLOAT, allowNull: false },
    timestamp: {
        type: DataTypes.BIGINT,
        defaultValue: () => Math.floor(Date.now() / 1000)
    }
}, {
    timestamps: false,
    tableName: 'UserLocation',
    charset: 'utf8',
    collate: 'utf8_general_ci'
});

module.exports = UserLocation;
