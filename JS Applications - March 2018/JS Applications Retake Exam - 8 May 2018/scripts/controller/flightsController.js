let flightsController = (() => {
    function createFlightGet(ctx) {
        if (!authService.isAuth()) {
            ctx.redirect('#/home');
            return;
        }

        ctx.username = sessionStorage.getItem('username');

        ctx.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs',
        }).then(function () {
            this.partial('./templates/flights/createFlight.hbs');
        }).catch(notifyService.handleError);
    }
    function createFlightPost(ctx) {
        if (!authService.isAuth()) {
            ctx.redirect('#/home');
            return;
        }

        ctx.username = sessionStorage.getItem('username');

        let destination = document.getElementsByName('destination')[0].value;
        let origin = document.getElementsByName('origin')[0].value;
        let departureDate = document.getElementsByName('departureDate')[0].value;
        let departureTime = document.getElementsByName('departureTime')[0].value;
        let seats = document.getElementsByName('seats')[0].value;
        let cost = document.getElementsByName('cost')[0].value;
        let img = document.getElementsByName('img')[0].value;
        let isPublished;
        let checkbox = document.getElementsByName('isPublished')[0];
        if(checkbox.checked === true) {
            isPublished = "true"
        } else {
            isPublished = "false"
        }

        let data = {
            destination: destination,
            origin: origin,
            departureDate: departureDate,
            departureTime: departureTime,
            seats: seats,
            cost: cost,
            img: img,
            isPublished: isPublished
        };

        flightsService.createFlight(data).then(() => {
            notifyService.showInfo('Created flight.');
            ctx.redirect('#/allFlights')
        })
    }

    function viewAllFlights(ctx) {
        if (!authService.isAuth()) {
            ctx.redirect('#/home');
            return;
        }

        ctx.username = sessionStorage.getItem('username');

        flightsService.getPublishedFlights().then((flights) => {
            ctx.flights = flights
            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
            }).then(function () {
                this.partial('./templates/flights/viewCatalog.hbs')
            }).catch(notifyService.handleError);
        });
    }

    function viewMyFlights(ctx) {
        if (!authService.isAuth()) {
            ctx.redirect('#/home');
            return;
        }

        ctx.username = sessionStorage.getItem('username');
        let userId = sessionStorage.getItem('userId');

        flightsService.userFlights(userId).then((flights) => {
            ctx.flights = flights;
            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
            }).then(function () {
                this.partial('./templates/flights/myFlights.hbs')
            }).catch(notifyService.handleError);
        });
    }

    function deleteFlight(ctx) {
        let flightId = ctx.params.id;
        let userId = sessionStorage.getItem('userId');
        flightsService.removeFlight(flightId).then(() => {
            notifyService.showInfo('Flight deleted.');
            ctx.redirect(`#/myFlights/${userId}`);
        });
    }

    function flightDetails(ctx) {
        let flightId = ctx.params.id;
        sessionStorage.setItem('flightId', flightId);
        flightsService.flightDetails(flightId).then((flight) => {
            ctx.flight = flight;
            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
            }).then(function () {
                this.partial('./templates/flights/flightDetails.hbs')
            }).catch(notifyService.handleError);
        });
    }

    function editFlightGet(ctx) {
        ctx.username = sessionStorage.getItem('username');

        let flightId = sessionStorage.getItem('flightId');

        flightsService.flightDetails(flightId).then((flight) => {
            ctx.flight = flight;
            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
            }).then(function () {
                this.partial('./templates/flights/editFlight.hbs');
            }).catch(notifyService.handleError);
        });
    }

    function editFlightPost(ctx) {
        let flightId = sessionStorage.getItem('flightId');
        let userId = sessionStorage.getItem('userId');

        let destination = document.getElementsByName('destinationEdit')[0].value;
        let origin = document.getElementsByName('originEdit')[0].value;
        let departureDate = document.getElementsByName('departureDateEdit')[0].value;
        let departureTime = document.getElementsByName('departureTimeEdit')[0].value;
        let seats = document.getElementsByName('seatsEdit')[0].value;
        let cost = document.getElementsByName('costEdit')[0].value;
        let img = document.getElementsByName('imgEdit')[0].value;
        let isPublished;
        let checkbox = document.getElementsByName('isPublishedEdit')[0];
        if(checkbox.checked === true) {
            isPublished = "true"
        } else {
            isPublished = "false"
        }

        let data = {
            destination: destination,
            origin: origin,
            departureDate: departureDate,
            departureTime: departureTime,
            seats: seats,
            cost: cost,
            img: img,
            isPublished: isPublished
        };

        flightsService.editFlight(flightId, data).then(() => {
            notifyService.showInfo('Successfully edited flight.');
            ctx.redirect(`#/myFlights/${userId}`);
        })
    }

    return {
        createFlightGet,
        createFlightPost,
        viewAllFlights,
        viewMyFlights,
        deleteFlight,
        flightDetails,
        editFlightGet,
        editFlightPost
    }
})();
