const express = require('express');
const app = express();
require('dotenv').config();
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes');

app.use(express.json());
app.use('/api/v1', authRoutes);

sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log('Server running on port 3000');
    });
}).catch((error) => {
    console.error('Unable to connect to the database:', error);
});
