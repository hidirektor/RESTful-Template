module.exports = (roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.userType)) {
            return res.sendStatus(403);
        }
        next();
    };
};