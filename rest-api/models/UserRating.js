const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

/**
 * @swagger
 * components:
 *   schemas:
 *     UserRating:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Rating ID
 *         userID:
 *           type: string
 *           description: Unique user ID
 *         userRating:
 *           type: number
 *           format: double
 *           description: User's rating
 */

const UserRating = sequelize.define('UserRating', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    userID: { type: DataTypes.STRING, unique: true, allowNull: false },
    userRating: { type: DataTypes.DOUBLE, allowNull: false }
}, {
    timestamps: false,
    tableName: 'UserRating',
    charset: 'utf8',
    collate: 'utf8_general_ci'
});

module.exports = UserRating;
