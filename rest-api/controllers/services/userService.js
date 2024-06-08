const Users = require('../../models/User');
const UserPreferences = require('../../models/UserPreferences');
const UserDocuments = require('../../models/UserDocuments');
const UserRating = require('../../models/UserRating');
const CustomError = require('../../utils/customError');

class UserService {
    static async getProfile(phoneNumber) {
        const user = await Users.findOne({ where: { phoneNumber } });
        if (!user) throw new CustomError('User not found', 404);

        const userID = user.userID;
        const userDocuments = await UserDocuments.findOne({ where: { userID } });
        const userPreferences = await UserPreferences.findOne({ where: { userID } });
        const userRating = await UserRating.findOne({ where: { userID } });

        return { user, userDocuments, userPreferences, userRating };
    }

    static async updateProfile(userID, userData, userDocumentsData) {
        const user = await Users.findOne({ where: { userID } });
        if (!user) throw new CustomError('User not found', 404);

        await user.update(userData);

        const userDocuments = await UserDocuments.findOne({ where: { userID } });
        if (userDocuments) {
            await userDocuments.update(userDocumentsData);
        } else {
            await UserDocuments.create({ userID, ...userDocumentsData });
        }

        return { message: 'Profile updated successfully' };
    }

    static async getPreferences(userID) {
        const userPreferences = await UserPreferences.findOne({ where: { userID } });
        if (!userPreferences) throw new CustomError('Preferences not found', 404);

        return userPreferences;
    }

    static async updatePreferences(userID, preferencesData) {
        const userPreferences = await UserPreferences.findOne({ where: { userID } });
        if (!userPreferences) throw new CustomError('Preferences not found', 404);

        await userPreferences.update(preferencesData);

        return { message: 'Preferences updated successfully' };
    }

    static async getRating(userID) {
        const userRating = await UserRating.findOne({ where: { userID } });
        if (!userRating) throw new CustomError('Rating not found', 404);

        return userRating;
    }

    static async updateRating(userID, userRating) {
        const userRatingRecord = await UserRating.findOne({ where: { userID } });
        if (!userRatingRecord) throw new CustomError('Rating not found', 404);

        await userRatingRecord.update({ userRating });

        return { message: 'Rating updated successfully' };
    }
}

module.exports = UserService;