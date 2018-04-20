$(() => {
    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');

        this.get('index.html', displayHomePage);
        this.get('#/home', displayHomePage);

        //GET about page
        this.get('#/about', (ctx) => {
            ctx.loggedIn = auth.isAuth();
            ctx.username = sessionStorage.getItem('username');

            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/about/about.hbs');
            })
        });

        //GET register
        this.get('#/register', (ctx) => {
            ctx.loadPartials({
                header: './templates/common/header.hbs',
                home: './templates/home/home.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/register/registerForm.hbs');
            })
        });

        //POST register
        this.post('#/register', (ctx) => {
            let username = ctx.params.username;
            let password = ctx.params.password;
            let repeatPassword = ctx.params.repeatPassword;

            if (password !== repeatPassword) {
                auth.showError('Passwords did not match!')
            } else {
                auth.showInfo('Your registration was successful!');
                auth.register(username, password, repeatPassword);
                ctx.redirect('#/index.html')
            }
        });

        //GET login page
        this.get('#/login', (ctx) => {
            ctx.loadPartials({
                header: './templates/common/header.hbs',
                home: './templates/home/home.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/login/loginForm.hbs');
            })
        });

        //POST login page
        this.post('#/login', (ctx) => {
            let username = ctx.params.username;
            let password = ctx.params.password;

            auth.login(username, password).then((userData) => {
                    auth.saveSession(userData);
                    auth.showInfo(`Welcome ${username}`);
                    ctx.redirect('#/index.html');
                })
        });

        //GET logout
        this.get('#/logout', (ctx) => {
            let authtoken = sessionStorage.getItem('authtoken');

            auth.logout(authtoken).then((userData) => {
                    sessionStorage.clear(userData);
                    auth.showInfo('You have successfully logged out!');
                    ctx.redirect('#/index.html')
                })
        });

        //GET teams catalog
        this.get('#/catalog', (ctx) => {
            ctx.loggedIn = auth.isAuth();
            ctx.username = sessionStorage.getItem('username');

            teamsService.loadTeams().then(function (teams) {
                    ctx.hasNoTeam = sessionStorage.getItem('teamId') === null
                        || sessionStorage.getItem('teamId') === 'undefined';
                    ctx.teams = teams;

                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                        team: './templates/catalog/team.hbs'
                    }).then(function () {
                        this.partial('./templates/catalog/teamCatalog.hbs');
                    })
                }).catch(auth.handleError)
        });

        //GET team details
        this.get('#/catalog/:id', (ctx) => {
            let teamId = ctx.params.id.substr(1);

            teamsService.loadTeamDetails(teamId).then(function (teamInfo) {
                    ctx.loggedIn = auth.isAuth();
                    ctx.username = sessionStorage.getItem('username');
                    ctx.isAuthor = teamInfo._acl.creator === sessionStorage.getItem('userId');
                    ctx.name = teamInfo.name;
                    ctx.comment = teamInfo.comment;
                    ctx.teamId = teamInfo.teamId;
                    ctx.members = teamInfo.members;

                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                        teamMember: './templates/catalog/teamMember.hbs',
                        teamControls: './templates/catalog/teamControls.hbs'
                    }).then(function () {
                        this.partial('./templates/catalog/details.hbs')
                    })
                }).catch(auth.handleError)
        });

        //GET create team
        this.get('#/create', (ctx) => {
            ctx.loggedIn = auth.isAuth();
            ctx.username = sessionStorage.getItem('username');

            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                createForm: './templates/create/createForm.hbs'
            }).then(function () {
                this.partial('./templates/create/createPage.hbs');
            })
        });

        //POST create team
        this.post('#/create', (ctx) => {
            let name = ctx.params.name;
            let comment = ctx.params.comment;

            teamsService.createTeam(name, comment).then((teamData) => {
                    teamsService.joinTeam(teamData._id).then(() => {
                            sessionStorage.setItem('teamId', teamData._id);
                            auth.showInfo(`Team ${name} successfully created.`);
                            ctx.redirect('#/home')
                        })
                }).catch(auth.handleError)
        });

        this.get('#/edit/:id', (ctx) => {
            ctx.loggedIn = auth.isAuth();
            ctx.username = sessionStorage.getItem('username');
            ctx.teamId = ctx.params.id.substr(1);

            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                editForm: './templates/edit/editForm.hbs'
            }).then(function () {
                this.partial('./templates/edit/editPage.hbs');
            })
        });

        this.post('#/edit', (ctx) => {
            let teamId = ctx.params.id.substr(1);
            let name = ctx.params.name;
            let comment = ctx.params.comment;

            teamsService.edit(teamId, name, comment).then(() => {
                    auth.showInfo(`Team ${name} successfully edited.`);
                    ctx.redirect('#/home');
                })
        });


    });

    function displayHomePage(ctx) {
        ctx.loggedIn = auth.isAuth();
        ctx.username = sessionStorage.getItem('username');

        ctx.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs'
        }).then(function () {
            ctx.partials = this.partials;
            this.partial('./templates/home/home.hbs');
        })
    }

    app.run();
});