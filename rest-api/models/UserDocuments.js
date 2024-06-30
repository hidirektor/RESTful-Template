const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

/**
 * @swagger
 * components:
 *   schemas:
 *     UserDocuments:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Document ID
 *         userID:
 *           type: string
 *           description: Unique user ID
 *         licenseFrontFace:
 *           type: string
 *           description: Front face of the user's license
 *         licenseBackFace:
 *           type: string
 *           description: Back face of the user's license
 */

const UserDocuments = sequelize.define('UserDocuments', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    userID: { type: DataTypes.STRING, unique: true, allowNull: false },
    licenseFrontFace: { type: DataTypes.TEXT, allowNull: false },
    licenseBackFace: { type: DataTypes.TEXT, allowNull: false }
}, {
    timestamps: false,
    tableName: 'UserDocuments',
    charset: 'utf8',
    collate: 'utf8_general_ci'
});

module.exports = UserDocuments;
