const { parentPort } = require('worker_threads');
const { trendyolOrders } = require('./trendyolService');

function runService() {
    trendyolOrders();
}

runService();

setInterval(runService, 60000);

parentPort.on('message', (message) => {
    if (message === 'stop') {
        process.exit();
    }
});