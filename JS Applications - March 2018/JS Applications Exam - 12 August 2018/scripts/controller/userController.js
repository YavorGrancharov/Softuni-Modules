let userController = (() => {
    function handleRegisterGet(ctx) {
        ctx.anonymous = true;

        ctx.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs'
        }).then(function () {
            this.partial('./templates/register/register.hbs');
        })
    }

    function handleRegisterPost(ctx) {
        let username = ctx.params["username"];
        let password = ctx.params["password"];
        let repeatPass = ctx.params["repeatPass"];

        if (!/^[A-Za-z]{3,}$/.test(username)) {
            notifyService.showError('Username should be at least 3 characters long and contains only english alphabet letters!');
        } else if (!/^[A-Za-z0-9]{6,}$/.test(password)) {
            notifyService.showError('Password must be at least 6 characters long!');
        } else if (password === '' || repeatPass === '') {
            notifyService.showError('Password input fields must be non-empty!');
        } else if (password !== repeatPass) {
            notifyService.showError('Both passwords should match!');
        } else {
            userService.register(username, password).then((userData) => {
                authService.saveSession(userData);
                notifyService.showInfo('User registration successful.');
                ctx.redirect('#/home');
            }).catch(notifyService.handleError)
        }
    }

    function handleLoginGet(ctx) {
        ctx.anonymous = true;

        ctx.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs'
        }).then(function () {
            this.partial('./templates/login/login.hbs');
        })
    }

    function handleLoginPost(ctx) {
        let username = ctx.params["username"];
        let password = ctx.params["password"];

        if (!/^[A-Za-z]{3,}$/.test(username)) {
            notifyService.showError('Username should be at least 3 characters long and contains only english alphabet letters!');
        } else if (!/^[A-Za-z0-9]{6,}$/.test(password)) {
            notifyService.showError('Password must be at least 6 characters long!');
        } else if (username === '' || password === '') {
            notifyService.showError('All fields must be non-empty!');
        } else {
            userService.login(username, password).then((userData) => {
                authService.saveSession(userData);
                notifyService.showInfo('Login successful!');
                ctx.redirect('#/allCars');
            }).catch(notifyService.handleError)
        }
    }

    function handleLogout(ctx) {
        let authtoken = sessionStorage.getItem('authtoken');

        userService.logout(authtoken).then((userData) => {
            sessionStorage.clear(userData);
            notifyService.showInfo('Logout successful.');
            ctx.redirect('#/home')
        }).catch(notifyService.handleError)
    }

    return {
        handleRegisterGet,
        handleRegisterPost,
        handleLoginGet,
        handleLoginPost,
        handleLogout
    }
})();