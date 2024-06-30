const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const System = sequelize.define('System', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    systemTitle: { type: DataTypes.STRING },
    systemDescription: { type: DataTypes.STRING },
    systemLogo: { type: DataTypes.STRING },
    systemFavicon: { type: DataTypes.STRING },
    packageFee: { type: DataTypes.INTEGER },
    oneTimePackageLimit: { type: DataTypes.INTEGER }
}, {
    timestamps: false,
    charset: 'utf8',
    collate: 'utf8_general_ci'
});

module.exports = System;