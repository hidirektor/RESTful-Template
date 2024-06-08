const isEmptyCheck = (value) => {
    return value === null || value === undefined || (typeof value === 'object' && Object.keys(value).length === 0);
};

module.exports = { isEmptyCheck };