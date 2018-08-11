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
        let username = ctx.params["username-register"];
        let password = ctx.params["password-register"];
        let repeatPass = ctx.params["password-register-check"];

        if (!/^[A-Za-z]{5,}$/.test(username)) {
            notifyService.showError('Username should be at least 5 characters long and contains only english alphabet letters!');
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
        let username = ctx.params["username-login"];
        let password = ctx.params["password-login"];

        if (username === '' || password === '') {
            notifyService.showError('All fields must be non-empty!');
        } else {
            userService.login(username, password).then((userData) => {
                authService.saveSession(userData);
                notifyService.showInfo('Login successful!');
                ctx.redirect('#/home');
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