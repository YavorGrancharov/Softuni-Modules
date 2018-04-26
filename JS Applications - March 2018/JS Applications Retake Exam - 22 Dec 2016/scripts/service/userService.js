let userService = (() => {
    function register(username, password, name) {
        let userData = {username: username, password: password, name: name, cart: {}};

        return remoteService.post('user', '', 'basic', userData);
    }

    function login(username, password) {
        let userData = {username: username, password: password};

        return remoteService.post('user', 'login', 'basic', userData);
    }

    function logout() {
        let userData = {authtoken: sessionStorage.getItem('authtoken')};

        return remoteService.post('user', '_logout', 'kinvey', userData, {});
    }

    return {
        register,
        login,
        logout
    }
})();