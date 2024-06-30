const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

/**
 * @swagger
 * components:
 *   schemas:
 *     System:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: System ID
 *         systemTitle:
 *           type: string
 *           description: Title of the system
 *         systemDescription:
 *           type: string
 *           description: Description of the system
 *         systemLogo:
 *           type: string
 *           description: Logo of the system
 *         systemFavicon:
 *           type: string
 *           description: Favicon of the system
 *         packageFee:
 *           type: integer
 *           description: Fee of the package
 *         oneTimePackageLimit:
 *           type: integer
 *           description: One-time package limit
 */

const System = sequelize.define('System', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    systemTitle: { type: DataTypes.STRING, allowNull: true },
    systemDescription: { type: DataTypes.STRING, allowNull: true },
    systemLogo: { type: DataTypes.STRING, allowNull: true },
    systemFavicon: { type: DataTypes.STRING, allowNull: true },
    packageFee: { type: DataTypes.INTEGER, allowNull: true },
    oneTimePackageLimit: { type: DataTypes.INTEGER, allowNull: true }
}, {
    timestamps: false,
    tableName: 'System',
    charset: 'utf8',
    collate: 'utf8_general_ci'
});

module.exports = System;
