$(() => {
    const app = Sammy('#container', function () {
        this.use('Handlebars', 'hbs');

        this.get('index.html', homeController.displayHome);
        this.get('#/home', homeController.displayHome);

        this.get('#/register', userController.handleRegisterGet);
        this.post('#/register', userController.handleRegisterPost);

        this.get('#/login', userController.handleLoginGet);
        this.post('#/login', userController.handleLoginPost);

        this.get('#/logout', userController.handleLogout);

        this.get('#/addFlight', flightsController.createFlightGet);
        this.post('#/addFlight', flightsController.createFlightPost);

        this.get('#/allFlights', flightsController.viewAllFlights);
        this.get('#/myFlights/:userId', flightsController.viewMyFlights);

        this.get('#/delete/:id', flightsController.deleteFlight);
        this.get('#/details/:id', flightsController.flightDetails);

        this.get('#/edit/:id', flightsController.editFlightGet);
        this.post('#/edit/:id', flightsController.editFlightPost);
    });

    app.run();
});