let carService = (() => {
    function listAllCars() {
        const endpoint = 'cars?query={}&sort={"_kmd.ect": -1}';

        return remote.get('appdata', endpoint, 'kinvey');
    }

    function userCars(username) {
        const endpoint = `cars?query={"seller":"${username}"}&sort={"_kmd.ect": -1}`;

        return remote.get('appdata', endpoint, 'kinvey');
    }

    function createCar(data) {
        const endpoint = 'cars';

        return remote.post('appdata', endpoint, 'kinvey', data);
    }

    function carDetails(carId) {
        const endpoint = `cars/${carId}`;

        return remote.get('appdata', endpoint, 'kinvey');
    }

    function editCar(carId, data) {
        const endpoint = `cars/${carId}`;

        return remote.update('appdata', endpoint, 'kinvey', data);
    }

    function deleteCar(carId) {
        const endpoint = `cars/${carId}`;

        return remote.remove('appdata', endpoint, 'kinvey');
    }

    return {
        listAllCars,
        userCars,
        createCar,
        carDetails,
        editCar,
        deleteCar
    }
})();