let userController = (() => {
    function handleRegisterGet(ctx) {
        ctx.anonymous = true;

        ctx.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs'
        }).then(function () {
            this.partial('./templates/register/registerForm.hbs')
        })
    }

    function handleRegisterPost(ctx) {
        let username = ctx.params.username;
        let password = ctx.params.password;
        let name = ctx.params.name;

        userService.register(username, password, name).then((userData) => {
            authService.saveSession(userData);
            notifyService.showInfo('User registration successful.');
            ctx.redirect('#/home');
        }).catch(notifyService.handleError);
    }

    function handleLoginGet(ctx) {
        ctx.anonymous = true;

        ctx.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs'
        }).then(function () {
            this.partial('./templates/login/loginForm.hbs')
        })
    }

    function handleLoginPost(ctx) {
        let username = ctx.params.username;
        let password = ctx.params.password;

        userService.login(username, password).then((userData) => {
            authService.saveSession(userData);
            notifyService.showInfo('Login successful.');
            ctx.redirect('#/profile');
        }).catch(notifyService.handleError);
    }

    function handleLogout(ctx) {
        let authtoken = sessionStorage.getItem('authtoken');

        userService.logout(authtoken).then((userData) => {
            authService.clearSession(userData);
            notifyService.showInfo('Logout successful.');
            ctx.redirect('#/home');
        }).catch(notifyService.handleError);
    }

    return {
        handleRegisterGet,
        handleRegisterPost,
        handleLoginGet,
        handleLoginPost,
        handleLogout
    }
})();