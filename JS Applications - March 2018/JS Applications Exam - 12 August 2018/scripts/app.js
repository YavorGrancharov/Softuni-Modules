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

        this.get('#/allCars', carController.listAllCars);
        this.get('#/myCars', carController.myCars);

        this.get('#/createCar', carController.createCarGet);
        this.post('#/createCar', carController.createCarPost);

        this.get('#/details/:id', carController.carDetails);

        this.get('#/edit/:id', carController.editCarGet);
        this.post('#/edit/:id', carController.editCarPost);

        this.get('#/delete/:id', carController.deleteCar);
    });

    app.run();
});