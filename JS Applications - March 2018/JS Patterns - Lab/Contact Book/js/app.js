const handlers = {};

$(() => {
    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');

        this.get('#/index.html', handlers.homeHandler);

        this.get('#/register', (ctx) => {
            ctx.loadPartials({
                header: './templates/header.hbs',
                navigation: './templates/navbar.hbs',
                footer: './templates/footer.hbs'
            }).then(function () {
                this.partial('./templates/registerForm.hbs')
            })
        });

        this.post('#/register', (ctx) => {
            let username = ctx.params.username;
            let password = ctx.params.password;
            let repeatPassword = ctx.params.repeatPassword;

            if (password !== repeatPassword) {
                alert('Passwords didn\'t match!');
            } else {
                auth.register(username, password);
                ctx.redirect('#/index.html')
            }
        });

        this.post('#/login', (ctx) => {
            let username = ctx.params.username;
            let password = ctx.params.password;

            auth.login(username, password)
                .then((userData) => {
                    auth.saveSession(userData);
                    ctx.redirect('#/index.html');
                }).catch(console.error);
        })
    });

    app.run();
});