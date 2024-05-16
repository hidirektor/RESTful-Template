const Users = require('../models/Users');
const UserPreferences = require('../models/UserPreferences');
const UserDocuments = require('../models/UserDocuments');
const UserRating = require('../models/UserRating');
const UserLocation = require('../models/UserLocation');
const MerchantsOwner = require('../models/MerchantsOwner');
const MerchantsAPI = require('../models/MerchantsAPI');
const MerchantsOrders = require('../models/MerchantsOrders');
const Verification = require('../models/Verification');
const VerificationBike = require('../models/VerificationBike');
const VerificationOrder = require('../models/VerificationOrder');
const Merchants = require('../models/Merchants');

//Users.userName > UserPreferences.userName
Users.hasOne(UserPreferences, { foreignKey: 'userName', sourceKey: 'userName', onUpdate: 'CASCADE', onDelete: 'CASCADE' });
UserPreferences.belongsTo(Users, { foreignKey: 'userName', targetKey: 'userName' });

//Users.userName > UserDocuments.userName
Users.hasOne(UserDocuments, { foreignKey: 'userName', sourceKey: 'userName', onUpdate: 'CASCADE', onDelete: 'CASCADE' });
UserDocuments.belongsTo(Users, { foreignKey: 'userName', targetKey: 'userName' });

//Users.userName > Mechants.ownerUserName
Users.hasOne(Merchants, { foreignKey: 'ownerUserName', sourceKey: 'userName', onUpdate: 'CASCADE', onDelete: 'CASCADE' });
Merchants.belongsTo(Users, { foreignKey: 'ownerUserName', targetKey: 'userName' });

//Users.userName > MerchantsOwner.userName
Users.hasOne(MerchantsOwner, { foreignKey: 'userName', sourceKey: 'userName', onUpdate: 'CASCADE', onDelete: 'CASCADE' });
MerchantsOwner.belongsTo(Users, { foreignKey: 'userName', targetKey: 'userName' });

//Users.userName > UserRating.userName
Users.hasOne(UserRating, { foreignKey: 'userName', sourceKey: 'userName', onUpdate: 'CASCADE', onDelete: 'CASCADE' });
UserRating.belongsTo(Users, { foreignKey: 'userName', targetKey: 'userName' });

//Users.userName > Verification.userName
Users.hasOne(Verification, { foreignKey: 'userName', sourceKey: 'userName', onUpdate: 'CASCADE', onDelete: 'CASCADE' });
Verification.belongsTo(Users, { foreignKey: 'userName', targetKey: 'userName' });

//Users.userName > VerificationBike.userName
Users.hasOne(VerificationBike, { foreignKey: 'userName', sourceKey: 'userName', onUpdate: 'CASCADE', onDelete: 'CASCADE' });
VerificationBike.belongsTo(Users, { foreignKey: 'userName', targetKey: 'userName' });

//Users.userName > UserLocation.userName
Users.hasOne(UserLocation, { foreignKey: 'userName', sourceKey: 'userName', onUpdate: 'CASCADE', onDelete: 'CASCADE' });
UserLocation.belongsTo(Users, { foreignKey: 'userName', targetKey: 'userName' });

//Users.userName > VerificationOrder.carrierUserName
Users.hasOne(VerificationOrder, { foreignKey: 'carrierUserName', sourceKey: 'userName', onUpdate: 'CASCADE', onDelete: 'CASCADE' });
VerificationOrder.belongsTo(Users, { foreignKey: 'carrierUserName', targetKey: 'userName' });

//Users.userName > MerchantsAPI.userName
Users.hasOne(MerchantsAPI, { foreignKey: 'ownerName', sourceKey: 'userName', onUpdate: 'CASCADE', onDelete: 'CASCADE' });
MerchantsAPI.belongsTo(Users, { foreignKey: 'ownerName', targetKey: 'userName' });

//Users.userName > MerchantsOrders.carrierName
Users.hasOne(MerchantsOrders, { foreignKey: 'carrierName', sourceKey: 'userName', onUpdate: 'CASCADE', onDelete: 'CASCADE' });
MerchantsOrders.belongsTo(Users, { foreignKey: 'carrierName', targetKey: 'userName' });