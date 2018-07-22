const userService = (() => {
    function register(username, password, repeatPass) {
        let userData = {
            username: username,
            password: password,
            subscriptions: []
        };

        return remoteService.post('user', '', 'basic', userData);
    }

    function login(username, password) {
        let userData = {
            username: username,
            password: password
        };

        return remoteService.post('user', 'login', 'basic', userData);
    }

    function logout() {
        let data = {
            authtoken: sessionStorage.getItem('authtoken')
        };

        return remoteService.post('user', '_logout', 'kinvey', data);
    }

    function modifyUser(userId, newSubs) {
        let newUser = {
            subscriptions: newSubs
        };

        return remoteService.update('user', userId, 'kinvey', newUser)
    }

    return {
        register,
        login,
        logout,
        modifyUser
    }
})();