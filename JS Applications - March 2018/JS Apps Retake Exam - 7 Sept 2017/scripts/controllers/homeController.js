let homeController = (() => {
    function displayHome(ctx) {
        if (authService.isAuth()) {
            ctx.username = sessionStorage.getItem('username');

            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/home/navigation.hbs');
            })
        } else {
            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/common/logReg.hbs');
            })
        }
    }

    return {
        displayHome
    }
})();