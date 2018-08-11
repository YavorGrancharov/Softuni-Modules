let flightsService = (() => {
    function getPublishedFlights() {
        const endpoint = 'flights?query={"isPublished": "true"}';

        return remote.get('appdata', endpoint, 'kinvey');
    }

    function createFlight(data) {
        const endpoint = 'flights';

        return remote.post('appdata', endpoint, 'kinvey', data);
    }

    function userFlights(userId) {
        const endpoint = `flights?query={"_acl.creator":"${userId}"}`;

        return remote.get('appdata', endpoint, 'kinvey');
    }

    function removeFlight(flightId) {
        const endpoint = `flights/${flightId}`;

        return remote.remove('appdata', endpoint, 'kinvey');
    }

    function flightDetails(flightId) {
        const endpoint = `flights/${flightId}`;

        return remote.get('appdata', endpoint, 'kinvey');
    }

    function editFlight(flightId, data) {
        const endpoint = `flights/${flightId}`;

        return remote.update('appdata', endpoint, 'kinvey', data)
    }

    return {
        getPublishedFlights,
        createFlight,
        userFlights,
        removeFlight,
        flightDetails,
        editFlight
    }
})();