const UserLocation = require('../../models/UserLocation');

class LocationService {
    static async updateLocation(locationData) {
        const location = await UserLocation.create(locationData);
        return location;
    }
}

module.exports = LocationService;