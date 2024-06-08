const controllers = require('./providers');

class ControllersFactory {
    constructor() {}

    static creating(provider, args) {
        let controller = controllers;

        provider.split('/').forEach((pathPart) => {
            if (controller[pathPart]) {
                controller = controller[pathPart];
            } else {
                throw new Error(
                    'Controller is not found. Controller provider: ' + provider
                );
            }
        });

        if (typeof controller === 'function') {
            return new controller(args);
        } else {
            throw new Error(
                'Controller is not a constructor. Controller provider: ' + provider
            );
        }
    }
}

module.exports = ControllersFactory;