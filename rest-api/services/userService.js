const Users = require('../models/User');
const UserPreferences = require('../models/UserPreferences');
const UserDocuments = require('../models/UserDocuments');
const UserRating = require('../models/UserRating');
const Merchants = require('../models/Merchant');
const MerchantsAPI = require('../models/MerchantsAPI');
const CustomError = require('../utils/customError');

class UserService {
    static async getProfile(phoneNumber, userIdFromToken) {
        try {
            console.log(`Fetching user with phone number: ${phoneNumber}`);
            const user = await Users.findOne({ where: { phoneNumber } });
            if (!user) throw new CustomError('User not found', 404);

            const userID = user.userID;
            if (userID !== userIdFromToken) {
                throw new CustomError('Forbidden: Access denied', 403);
            }

            console.log(`Fetching user preferences for userID: ${userID}`);
            const userPreferences = await UserPreferences.findOne({ where: { userID } });

            if(user.userType === "CARRIER") {
                console.log(`Fetching user documents for userID: ${userID}`);
                const userDocuments = await UserDocuments.findOne({ where: { userID } });

                console.log(`Fetching user rating for userID: ${userID}`);
                const userRating = await UserRating.findOne({ where: { userID } });

                return { user, userDocuments, userPreferences, userRating };
            } else if(user.userType === "MERCHANT") {
                console.log(`Fetching merchant for userID: ${userID}`);
                const Merchant = await Merchants.findOne({ where: { userID } });
                const merchantID = Merchant.merchantID;

                console.log(`Fetching merchant API for merchantID: ${merchantID}`);
                const MerchantAPI = await MerchantsAPI.findOne({ where: { merchantID } });

                return { user, userDocuments, userPreferences, userRating, Merchant, MerchantAPI };
            }
        } catch (error) {
            console.error('Error in getProfile:', error);
            throw error;
        }
    }

    static async updateProfile(phoneNumber, userData, userDocumentsData, userPreferencesData) {
        try {
            console.log(`Updating profile for phone number: ${phoneNumber}`);
            const user = await Users.findOne({ where: { phoneNumber } });
            if (!user) throw new CustomError('User not found', 404);

            console.log(`Updating user data for userID: ${user.userID}`);
            await user.update(userData);

            const userID = user.userID;

            console.log(`Checking and updating user documents for userID: ${userID}`);
            const userDocuments = await UserDocuments.findOne({ where: { userID } });
            if (userDocuments) {
                await userDocuments.update(userDocumentsData);
            } else {
                await UserDocuments.create({ userID, ...userDocumentsData });
            }

            console.log(`Checking and updating user preferences for userID: ${userID}`);
            const userPreferences = await UserPreferences.findOne({ where: { userID } });
            if (userPreferences) {
                await userPreferences.update(userPreferencesData);
            } else {
                await UserPreferences.create({ userID, ...userPreferencesData });
            }

            return { message: 'Profile updated successfully' };
        } catch (error) {
            console.error('Error in updateProfile:', error);
            throw error;
        }
    }

    static async getPreferences(userID) {
        try {
            console.log(`Fetching preferences for userID: ${userID}`);
            const userPreferences = await UserPreferences.findOne({ where: { userID } });
            if (!userPreferences) throw new CustomError('Preferences not found', 404);

            return userPreferences;
        } catch (error) {
            console.error('Error in getPreferences:', error);
            throw error;
        }
    }

    static async updatePreferences(phoneNumber, preferencesData) {
        try {
            console.log(`Updating preferences for phone number: ${phoneNumber}`);
            const user = await Users.findOne({ where: { phoneNumber } });
            const userID = user.userID;

            console.log(`Checking and updating preferences for userID: ${userID}`);
            const userPreferences = await UserPreferences.findOne({ where: { userID } });
            if (!userPreferences) throw new CustomError('Preferences not found', 404);

            await userPreferences.update(preferencesData);

            return { message: 'Preferences updated successfully' };
        } catch (error) {
            console.error('Error in updatePreferences:', error);
            throw error;
        }
    }

    static async getRating(userID) {
        try {
            console.log(`Fetching rating for userID: ${userID}`);
            const userRating = await UserRating.findOne({ where: { userID } });
            if (!userRating) throw new CustomError('Rating not found', 404);

            return userRating;
        } catch (error) {
            console.error('Error in getRating:', error);
            throw error;
        }
    }

    static async updateRating(userID, userRating) {
        try {
            console.log(`Updating rating for userID: ${userID}`);
            const userRatingRecord = await UserRating.findOne({ where: { userID } });
            if (!userRatingRecord) throw new CustomError('Rating not found', 404);

            await userRatingRecord.update({ userRating });

            return { message: 'Rating updated successfully' };
        } catch (error) {
            console.error('Error in updateRating:', error);
            throw error;
        }
    }
}

module.exports = UserService;
