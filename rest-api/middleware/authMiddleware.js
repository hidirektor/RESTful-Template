const jwt = require('jsonwebtoken');
require('dotenv').config();

const authMiddleware = (roles = []) => {
    return (req, res, next) => {
        const token = req.headers['authorization'];
        if (!token) return res.status(403).json({ message: 'No token provided' });

        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) return res.status(500).json({ message: 'Failed to authenticate token' });

            if (roles.length && !roles.includes(decoded.userType)) {
                return res.status(403).json({ message: 'Unauthorized' });
            }

            req.user = decoded;
            next();
        });
    };
};

module.exports = authMiddleware;
