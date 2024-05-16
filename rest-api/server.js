const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const app = express();
require('dotenv').config();
const sequelize = require('./config/database');
require('./config/associations');
const authRoutes = require('./routes/authRoutes');
const locationRoutes = require('./routes/locationRoutes');

app.use(express.json());
app.use('/api/v1', authRoutes);
app.use('/api/v1', locationRoutes);

const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('locationUpdate', (data) => {
        io.emit('locationUpdate', data);
    });
});

sequelize.sync({ force: false, alter: true }).then(() => {
    server.listen(3000, () => {
        console.log('Server running on port 3000');
    });
}).catch((error) => {
    console.error('Unable to connect to the database:', error);
});