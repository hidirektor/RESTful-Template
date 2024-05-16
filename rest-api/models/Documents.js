const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Documents = sequelize.define('Documents', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    userName: { type: DataTypes.STRING, unique: true },
    licenseFrontFace: { type: DataTypes.STRING },
    licenseBackFace: { type: DataTypes.STRING }
}, { timestamps: false });

module.exports = Documents;
