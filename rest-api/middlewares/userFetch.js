const Users = require('../models/User');

const fetchUserByPhoneNumber = async (req, res, next) => {
    const { phoneNumber } = req.body;

    try {
        const user = await Users.findOne({ where: { phoneNumber } });
        if (!user) {
            return res.status(404).json({ message: 'Invalid userID or phone number. User not found.' });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error('Error fetching user by phone number:', error);
        res.status(500).json({ message: 'An unexpected error occurred. Please try again later.' });
    }
};

module.exports = fetchUserByPhoneNumber;
