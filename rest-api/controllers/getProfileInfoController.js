const User = require('../models/Users');

exports.getProfileInfo = async (req, res) => {
    const userName = req.params.userName;

    try {
        const user = await User.findOne({ where: { userName } });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving user information', error });
    }
};