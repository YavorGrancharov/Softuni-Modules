let chirpController = (() => {
    function getMainFeed(ctx) {
        if (!authService.isAuth()) {
            ctx.redirect('#/home');
            return;
        }

        ctx.username = sessionStorage.getItem('username');
        let username = sessionStorage.getItem('username');
        let subscriptions = JSON.parse(sessionStorage.getItem('subscriptions')).map(username => `"${username}"`);
        Promise.all([chirpService.getUserChirps(username), chirpService.getUserFollowers(username)])
            .then(([userChirps, userFollowers]) => {
                ctx.followers = userFollowers
                ctx.following = subscriptions;

                chirpService.getFollowingChirps(subscriptions).then((chirps) => {
                    ctx.chirps = chirps;

                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        navigation: './templates/home/navigation.hbs',
                        footer: './templates/common/footer.hbs'
                    }).then(function () {
                        this.partial('./templates/chirps/viewFeed.hbs');
                    })
                })
            }).catch(notifyService.handleError);
    }

    function createChirp(ctx) {
        ctx.username = sessionStorage.getItem('username');
        let userId = sessionStorage.getItem('userId');
        let text = document.getElementsByClassName('chirp-input')[0].value;
        chirpService.createChirp(text, sessionStorage.getItem('username')).then(() => {
            notifyService.showInfo('Chirp published.');
            ctx.redirect('#/viewMe');
        }).catch(notifyService.handleError);
    }

    function deleteChirp(ctx) {
        ctx.username = sessionStorage.getItem('username');

        let chirpId = ctx.params.chirpId;
        chirpService.deleteChirp(chirpId).then(() => {
            notifyService.showInfo('Chirp deleted.');
            ctx.redirect('#/viewMe');
        }).catch(notifyService.handleError);
    }

    function getUserFeed(ctx) {
        ctx.username = sessionStorage.getItem('username');
        let username = sessionStorage.getItem('username');
        let subscriptions = JSON.parse(sessionStorage.getItem('subscriptions'));
        Promise.all([chirpService.getUserChirps(username), chirpService.getUserFollowers(username)])
            .then(([userChirps, userFollowers]) => {
                ctx.followers = userFollowers
                ctx.following = subscriptions;

                chirpService.getUserChirps(username).then((chirps) => {
                    ctx.chirps = chirps;

                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        navigation: './templates/home/navigation.hbs',
                        footer: './templates/common/footer.hbs'
                    }).then(function () {
                        this.partial('./templates/chirps/viewMe.hbs');
                    })
                })
            }).catch(notifyService.handleError);
    }

    function viewPeopleScreen(ctx) {
        let username = sessionStorage.getItem('username');
        chirpService.getAllUsers().then((users) => {
            users = users.filter(u => u.username !== username);
            ctx.users = users;
            for (let index in users) {
                if (users.hasOwnProperty(index)) {
                    ctx.username = users[index].username;
                    chirpService.getUserFollowers(users[index].username).then((followers) => {
                        ctx.loadPartials({
                            header: './templates/common/header.hbs',
                            navigation: './templates/home/navigation.hbs',
                            footer: './templates/common/footer.hbs'
                        }).then(function () {
                            this.partial('./templates/chirps/viewDiscover.hbs');
                        })
                    })
                }
            }
        })
    }

    function getFollowingUserProfile(ctx) {
        ctx.username = ctx.params.author;
        console.log(ctx.params)
        let username = ctx.params.author;
        let subscriptions = JSON.parse(sessionStorage.getItem('subscriptions')).slice(0);
        Promise.all([chirpService.getUserChirps(username), chirpService.getUserFollowers(username)])
            .then(([userChirps, userFollowers]) => {
                ctx.followers = userFollowers;
                ctx.following = subscriptions;
                ctx.chirps = userChirps;
                chirpService.getUserFollowing(sessionStorage.getItem('username')).then((following) => {
                    let subs = following[0].subscriptions;
                    console.log(username)
                    if (subs.includes(username)) {
                        ctx.following = true;
                    } else {
                        ctx.following = false;
                    }

                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        navigation: './templates/home/navigation.hbs',
                        footer: './templates/common/footer.hbs'
                    }).then(function () {
                        this.partial('./templates/chirps/viewProfile.hbs');
                    })
                })
            }).catch(notifyService.handleError);
    }

    function followUser(ctx) {
        let userId = sessionStorage.getItem('userId');
        let username = ctx.params.username;
        let subscriptions = JSON.parse(sessionStorage.getItem('subscriptions')).slice(0);
        subscriptions.push(username);

        userService.modifyUser(userId, subscriptions).then(() => {
            notifyService.showInfo(`Subscribed to ${username}`);
            sessionStorage.setItem('subscriptions', JSON.stringify(subscriptions));
            ctx.redirect(`#/viewProfile/${username}`);
        }).catch(notifyService.handleError);
    }

    function unfollowUser(ctx) {
        let userId = sessionStorage.getItem('userId');
        let username = ctx.params.username;
        let subscriptions = JSON.parse(sessionStorage.getItem('subscriptions')).slice(0);
        let removed = subscriptions.indexOf(username);
        subscriptions.splice(removed, 1);

        userService.modifyUser(userId, subscriptions).then(() => {
            notifyService.showInfo(`Unsubscribed to ${username}`);
            sessionStorage.setItem('subscriptions', JSON.stringify(subscriptions));
            ctx.redirect(`#/viewProfile/${username}`);
        }).catch(notifyService.handleError);
    }

    return {
        getMainFeed,
        createChirp,
        deleteChirp,
        getUserFeed,
        viewPeopleScreen,
        getFollowingUserProfile,
        followUser,
        unfollowUser
    }
})();