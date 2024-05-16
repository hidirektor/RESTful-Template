const User = require('../models/Users');

exports.updateProfile = async (req, res) => {
    const userName = req.params.userName;
    const updates = req.body;

    try {
        const user = await User.findOne({ where: { userName } });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        Object.assign(user, updates);
        await user.save();

        res.status(200).json({ message: 'Profile updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating profile', error });
    }
};