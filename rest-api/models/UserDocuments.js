const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const UserDocuments = sequelize.define('UserDocuments', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    userName: { type: DataTypes.STRING, unique: true },
    licenseFrontFace: { type: DataTypes.STRING },
    licenseBackFace: { type: DataTypes.STRING }
}, {
    timestamps: false,
    charset: 'utf8',
    collate: 'utf8_general_ci'
});

module.exports = UserDocuments;