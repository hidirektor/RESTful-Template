const { v4: uuidv4 } = require('uuid');

const generateUserID = () => {
    return uuidv4();
};

module.exports = generateUserID;