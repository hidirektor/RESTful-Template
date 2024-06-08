const { parentPort } = require('worker_threads');
const { getirOrders } = require('./getirService');

function runService() {
    getirOrders();
}

runService();

setInterval(runService, 60000);

parentPort.on('message', (message) => {
    if (message === 'stop') {
        process.exit();
    }
});