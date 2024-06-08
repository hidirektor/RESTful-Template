const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

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