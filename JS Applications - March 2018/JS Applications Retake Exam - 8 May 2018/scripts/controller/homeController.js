let homeController = (() => {
    function displayHome(ctx) {
        if (authService.isAuth()) {
            ctx.username = sessionStorage.getItem('username');

            ctx.loadPartials({
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/home/userHome.hbs');
            })
        } else {
            ctx.loadPartials({
                login: './templates/login/login.hbs',
                register: './templates/register/register.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/home/home.hbs');
            })
        }
    }

    return {
        displayHome
    }
})();