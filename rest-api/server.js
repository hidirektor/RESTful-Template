const express = require('express');
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');
const http = require('http');
const { Server } = require('socket.io');
const { Worker } = require('worker_threads');
const rateLimit = require('express-rate-limit');
const fs = require('fs');
const path = require('path');

const sequelize = require('./config/database');
require('./config/associations');

const authRoutes = require('./routes/authRoutes');
const tokenRoutes = require('./routes/tokenRoutes');
const otpRoutes = require('./routes/otpRoutes');
const userRoutes = require('./routes/userRoutes');
const locationRoutes = require('./routes/locationRoutes');
const orderRoutes = require('./routes/orderRoutes');
const merchantRoutes = require('./routes/merchantRoutes');

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();

const corsOptions = {
    origin: 'http://hidirektor.com.tr',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

const globalRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // 100 req per ip
});

app.use(globalRateLimiter);

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'RESTful Template',
            version: '1.0.0',
            description: 'RESTful Template API'
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Local server'
            }
        ]
    },
    apis: ['./routes/*.js', './models/*.js', './controllers/**/*.js'],
};

const swaggerSpecs = swaggerJsdoc(swaggerOptions);
fs.writeFileSync('./swagger.json', JSON.stringify(swaggerSpecs, null, 2));

app.get('/swagger.json', (req, res) => {
    res.sendFile(path.join(__dirname, 'swagger.json'));
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(null, {
    swaggerOptions: {
        url: '/swagger.json'
    }
}));

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/token', tokenRoutes);
app.use('/api/v1/otp', otpRoutes);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/location', locationRoutes);
app.use('/api/v1/order', orderRoutes);
app.use('/api/v1/merchant', merchantRoutes);

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

sequelize.sync({ force: true, alter: true }).then(() => {
    server.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);

        //const trendyolWorker = new Worker('./services/marketplace/trendyol/trendyolWorker.js');
        //const getirWorker = new Worker('./services/marketplace/getir/getirWorker.js');

        /*trendyolWorker.on('error', (error) => {
            console.error('Trendyol Worker Error:', error);
        });

        getirWorker.on('error', (error) => {
            console.error('Getir Worker Error:', error);
        });*/

        process.on('SIGINT', () => {
            server.close(() => {
                console.log('Server shut down');
                process.exit(0);
            });
        });
    });
}).catch((error) => {
    console.error('Unable to connect to the database:', error);
});
