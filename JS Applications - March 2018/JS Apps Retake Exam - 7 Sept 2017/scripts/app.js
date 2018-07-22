$(() => {
    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');

        this.get('index.html', homeController.displayHome);
        this.get('#/home', homeController.displayHome);

        this.post('#/register', userController.handleRegister);
        this.post('#/login', userController.handleLogin);
        this.get('#/logout', userController.handleLogout);


        this.post('#/createChirp', chirpController.createChirp);
        this.get('#/deleteChirp/:chirpId', chirpController.deleteChirp);

        this.get('#/viewMe', chirpController.getUserFeed);
        this.get('#/viewFeed', chirpController.getMainFeed);
        this.get('#/viewDiscover', chirpController.viewPeopleScreen);
        this.get('#/viewProfile/:author', chirpController.getFollowingUserProfile);

        this.get('#/follow/:username', chirpController.followUser);
        this.get('#/unfollow/:username', chirpController.unfollowUser);
    });

    app.run()
});