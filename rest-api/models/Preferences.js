const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Preferences = sequelize.define('Preferences', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    userName: { type: DataTypes.STRING, unique: true },
    nightMode: { type: DataTypes.BOOLEAN },
    selectedLanguage: { type: DataTypes.BOOLEAN },
    firstBreakTime: { type: DataTypes.DATE },
    secondBreakTime: { type: DataTypes.DATE }
}, { timestamps: false });

module.exports = Preferences;
