const { parentPort } = require('worker_threads');
const MerchantService = require('../../../services/merchantService');
const MerchantsAPI = require('../../../models/MerchantsAPI');

const checkTokenExpiration = async () => {
    const merchantsAPI = await MerchantsAPI.findAll();
    const currentTime = new Date();

    for (const merchantAPI of merchantsAPI) {
        if (new Date(merchantAPI.yemekSepetiExpiresEnd) <= currentTime) {
            const loginData = {
                username: merchantAPI.yemekSepetiUsername,
                password: merchantAPI.yemekSepetiPassword
            };
            await MerchantService.updateYemekSepetiAPI(merchantAPI.merchantID, loginData);
        }
    }
};

const startChecking = async () => {
    while (true) {
        await checkTokenExpiration();
        await new Promise(resolve => setTimeout(resolve, 1000 * 60 * 30)); // Wait for 30 minutes
    }
};

parentPort.on('message', (message) => {
    if (message === 'stop') {
        process.exit(0);
    }
});

startChecking();
