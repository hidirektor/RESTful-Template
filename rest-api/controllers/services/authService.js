const Users = require('../../models/User');
const RefreshToken = require('../../models/RefreshToken');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { generateAccessToken } = require('../../config/jwt');
const CustomError = require('../../utils/customError');

class AuthService {
    static async register(userData) {
        const userID = generateUserID();
        userData.password = await bcrypt.hash(userData.password, 10);
        userData.userID = userID;

        const newUser = await Users.create(userData);

        return newUser;
    }

    static async login(userData) {
        const user = await Users.findOne({ where: { phoneNumber: userData.phoneNumber } });
        if (!user) throw new CustomError('User not found', 404);

        const validPassword = await bcrypt.compare(userData.password, user.password);
        if (!validPassword) throw new CustomError('Invalid password', 401);

        const accessToken = generateAccessToken({ userID: user.userID });
        const refreshToken = jwt.sign({ userID: user.userID }, process.env.JWT_SECRET);

        await RefreshToken.destroy({ where: { userID: user.userID } });
        await RefreshToken.create({ token: refreshToken, userID: user.userID });

        return { accessToken, refreshToken };
    }

    static async changePassword(userID, oldPassword, newPassword) {
        const user = await Users.findOne({ where: { userID } });
        if (!user) throw new CustomError('User not found', 404);

        const validPassword = await bcrypt.compare(oldPassword, user.password);
        if (!validPassword) throw new CustomError('Invalid current password', 401);

        if (user.lastPasswordChange && (Math.floor(Date.now() / 1000) - user.lastPasswordChange) < 7 * 24 * 60 * 60) {
            throw new CustomError('Password can only be changed once every 7 days', 400);
        }

        if (await bcrypt.compare(newPassword, user.password)) {
            throw new CustomError('New password cannot be the same as the old password', 400);
        }

        user.password = await bcrypt.hash(newPassword, 10);
        user.lastPasswordChange = Math.floor(Date.now() / 1000);
        await user.save();

        return { message: 'Password updated successfully' };
    }

    static async resetPassword(phoneNumber, newPassword) {
        const user = await Users.findOne({ where: { phoneNumber } });
        if (!user) throw new CustomError('User not found', 404);

        await RefreshToken.destroy({ where: { userID: user.userID } });

        user.password = await bcrypt.hash(newPassword, 10);
        await user.save();

        return { message: 'Password reset successfully' };
    }
}

module.exports = AuthService;