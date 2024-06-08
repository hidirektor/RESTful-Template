const Users = require('../models/User');
const RefreshTokens = require('../models/RefreshToken');
const UserPreferences = require('../models/UserPreferences');
const UserDocuments = require('../models/UserDocuments');
const UserRating = require('../models/UserRating');
const UserLocation = require('../models/UserLocation');
const MerchantsAPI = require('../models/MerchantsAPI');
const Orders = require('../models/Order');
const ActionLog = require('../models/ActionLog');
const OTPLog = require('../models/OTPLog');
const Merchants = require('../models/Merchants');
const System = require('../models/System');

// Users.userID > RefreshTokens.userID
Users.hasOne(RefreshTokens, { foreignKey: 'userID', sourceKey: 'userID', onUpdate: 'CASCADE', onDelete: 'CASCADE' });
RefreshTokens.belongsTo(Users, { foreignKey: 'userID', targetKey: 'userID' });

// Users.userID > UserDocuments.userID
Users.hasOne(UserDocuments, { foreignKey: 'userID', sourceKey: 'userID', onUpdate: 'CASCADE', onDelete: 'CASCADE' });
UserDocuments.belongsTo(Users, { foreignKey: 'userID', targetKey: 'userID' });

// Users.userID > UserRating.userID
Users.hasOne(UserRating, { foreignKey: 'userID', sourceKey: 'userID', onUpdate: 'CASCADE', onDelete: 'CASCADE' });
UserRating.belongsTo(Users, { foreignKey: 'userID', targetKey: 'userID' });

// Users.userID > UserPreferences.userID
Users.hasOne(UserPreferences, { foreignKey: 'userID', sourceKey: 'userID', onUpdate: 'CASCADE', onDelete: 'CASCADE' });
UserPreferences.belongsTo(Users, { foreignKey: 'userID', targetKey: 'userID' });

// Users.userID > UserLocation.userID
Users.hasOne(UserLocation, { foreignKey: 'userID', sourceKey: 'userID', onUpdate: 'CASCADE', onDelete: 'CASCADE' });
UserLocation.belongsTo(Users, { foreignKey: 'userID', targetKey: 'userID' });

// Users.userID > ActionLog.userID
Users.hasOne(ActionLog, { foreignKey: 'userID', sourceKey: 'userID', onUpdate: 'CASCADE', onDelete: 'CASCADE' });
ActionLog.belongsTo(Users, { foreignKey: 'userID', targetKey: 'userID' });

// Users.userID > OTPLog.userID
Users.hasOne(OTPLog, { foreignKey: 'userID', sourceKey: 'userID', onUpdate: 'CASCADE', onDelete: 'CASCADE' });
OTPLog.belongsTo(Users, { foreignKey: 'userID', targetKey: 'userID' });

// Users.userID > Verification.userID
Users.hasOne(ActionLog, { foreignKey: 'userID', sourceKey: 'userID', onUpdate: 'CASCADE', onDelete: 'CASCADE' });
ActionLog.belongsTo(Users, { foreignKey: 'userID', targetKey: 'userID' });

// Users.userID > Merchants.userID
Users.hasOne(Merchants, { foreignKey: 'userID', sourceKey: 'userID', onUpdate: 'CASCADE', onDelete: 'CASCADE' });
Merchants.belongsTo(Users, { foreignKey: 'userID', targetKey: 'userID' });

// Merchants.merchantID > MerchantsAPI.merchantID
Merchants.hasMany(MerchantsAPI, { foreignKey: 'merchantID', sourceKey: 'merchantID', onUpdate: 'CASCADE', onDelete: 'CASCADE' });
MerchantsAPI.belongsTo(Merchants, { foreignKey: 'merchantID', targetKey: 'merchantID' });

// Merchants.merchantID > ActiveOrders.merchantID
Merchants.hasMany(Orders, { foreignKey: 'merchantID', sourceKey: 'merchantID', onUpdate: 'CASCADE', onDelete: 'CASCADE' });
Orders.belongsTo(Merchants, { foreignKey: 'merchantID', targetKey: 'merchantID' });