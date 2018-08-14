let carController = (() => {
    function listAllCars(ctx) {
        if (!authService.isAuth()) {
            ctx.redirect('#/home');
            return;
        }

        ctx.username = sessionStorage.getItem('username');

        carService.listAllCars().then((cars) => {
            ctx.cars = cars;
            ctx.isAuth = true;

            cars.forEach(function (i, e) {
                i.isAuthor = i.seller === sessionStorage.getItem('username');
            });

            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
            }).then(function () {
                this.partial('./templates/cars/allCars.hbs');
            })
        }).catch(notifyService.handleError);
    }

    function myCars(ctx) {
        if (!authService.isAuth()) {
            ctx.redirect('#/home');
            return;
        }

        ctx.username = sessionStorage.getItem('username');
        let username = sessionStorage.getItem('username');

        carService.userCars(username).then((cars) => {
            ctx.cars = cars;
            ctx.isAuth = true;
            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
            }).then(function () {
                this.partial('./templates/cars/myCars.hbs');
            })
        }).catch(notifyService.handleError);
    }

    function createCarGet(ctx) {
        ctx.username = sessionStorage.getItem('username');
        ctx.isAuth = true;
        ctx.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs',
        }).then(function () {
            this.partial('./templates/cars/createCar.hbs');
        })
    }

    function createCarPost(ctx) {
        let username = sessionStorage.getItem('username');

        let title = document.getElementsByName('title')[0].value;
        let description = document.getElementsByName('description')[0].value;
        let brand = document.getElementsByName('brand')[0].value;
        let model = document.getElementsByName('model')[0].value;
        let year = document.getElementsByName('year')[0].value;
        let imageUrl = document.getElementsByName('imageUrl')[0].value;
        let fuel = document.getElementsByName('fuelType')[0].value;
        let price = document.getElementsByName('price')[0].value;

        if (title.length > 33) {
            notifyService.showError('Title must be no longer then 33 characters!');
            return;
        }
        if (description.length < 30 || description.length > 450) {
            notifyService.showError('Description must be between 30 and 450 characters!');
            return;
        }
        if ((brand.length || fuel.length || model.length) > 11) {
            notifyService.showError('You must not exceed 11 characters!');
            return;
        }
        if (year.length !== 4) {
            notifyService.showError('Year must be axactly 4 characters long!');
            return;
        }
        if (Number(price) > 1000000) {
            notifyService.showError('Price must not be bigger then 1000000$!');
            return;
        }
        if(!imageUrl.startsWith('http')) {
            notifyService.showError('URL adress must starts with http!');
            return;
        }

        let data = {
            seller: username,
            title: title,
            description: description,
            brand: brand,
            model: model,
            year: year,
            imageUrl: imageUrl,
            fuel: fuel,
            price: price,
            isAuthor: true
        }

        carService.createCar(data).then(() => {
            notifyService.showInfo('Listing created.');
            ctx.redirect('#/allCars')
        }).catch(notifyService.handleError);
    }

    function carDetails(ctx) {
        if (!authService.isAuth()) {
            ctx.redirect('#/home');
            return;
        }

        ctx.username = sessionStorage.getItem('username');

        let carId = ctx.params.id.substring(1);
        carService.carDetails(carId).then((car) => {
            ctx.car = car;
            ctx.isAuth = true;
            ctx.isAuthor = car.seller === sessionStorage.getItem('username');
            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
            }).then(function () {
                this.partial('./templates/cars/carDetails.hbs');
            })
        }).catch(notifyService.handleError);
    }

    function editCarGet(ctx) {
        if (!authService.isAuth()) {
            ctx.redirect('#/home');
            return;
        }

        ctx.username = sessionStorage.getItem('username');
        let carId = ctx.params.id.substring(1);

        carService.carDetails(carId).then((car) => {
            ctx.car = car;
            ctx.isAuth = true;
            sessionStorage.setItem('carId', car._id);
            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
            }).then(function () {
                this.partial('./templates/cars/editCar.hbs');
            })
        }).catch(notifyService.handleError);
    }

    function editCarPost(ctx) {
        let username = sessionStorage.getItem('username');

        let title = document.getElementsByName('title')[0].value;
        let description = document.getElementsByName('description')[0].value;
        let brand = document.getElementsByName('brand')[0].value;
        let model = document.getElementsByName('model')[0].value;
        let year = document.getElementsByName('year')[0].value;
        let imageUrl = document.getElementsByName('imageUrl')[0].value;
        let fuel = document.getElementsByName('fuelType')[0].value;
        let price = document.getElementsByName('price')[0].value;

        if (title.length > 33) {
            notifyService.showError('Title must be no longer then 33 characters!');
            return;
        }
        if (description.length < 30 || description.length > 450) {
            notifyService.showError('Description must be between 30 and 450 characters!');
            return;
        }
        if ((brand.length || fuel.length || model.length) > 11) {
            notifyService.showError('You must not exceed 11 characters!');
            return;
        }
        if (year.length !== 4) {
            notifyService.showError('Year must be axactly 4 characters long!');
            return;
        }
        if (Number(price) > 1000000) {
            notifyService.showError('Price must not be bigger then 1000000$!');
            return;
        }
        if(!imageUrl.startsWith('http')) {
            notifyService.showError('URL adress must starts with http!');
            return;
        }

        let data = {
            seller: username,
            title: title,
            description: description,
            brand: brand,
            model: model,
            year: year,
            imageUrl: imageUrl,
            fuel: fuel,
            price: price,
            isAuthor: true
        }

        let carId = sessionStorage.getItem('carId');
        carService.editCar(carId, data).then(() => {
            notifyService.showInfo(`Listing ${title} updated.`);
            ctx.redirect('#/allCars');
        }).catch(notifyService.handleError);
    }

    function deleteCar(ctx) {
        let carId = ctx.params.id.substring(1);
        carService.deleteCar(carId).then(() => {
            notifyService.showInfo('Listing deleted.');
            ctx.redirect('#/allCars');
        }).catch(notifyService.handleError);
    }

    return {
        listAllCars,
        myCars,
        createCarGet,
        createCarPost,
        carDetails,
        editCarGet,
        editCarPost,
        deleteCar
    }
})();