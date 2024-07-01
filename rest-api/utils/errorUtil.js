const handleError = (res, error) => {
    res.status(error.status || 500).json({ message: error.message || 'An unknown error occurred.' });
};

module.exports = { handleError };
