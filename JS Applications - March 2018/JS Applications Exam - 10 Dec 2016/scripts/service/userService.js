let userService = (() => {
    function register(username, password, name) {
        let userData = {
            username: username,
            password: password,
            name: name
        };

        return remote.post('user', '', 'basic', userData);
    }

    function login(username, password) {
        let userData = {
            username: username,
            password: password
        };

        return remote.post('user', 'login', 'basic', userData);
    }

    function logout() {
        let userData = {
            authtoken: sessionStorage.getItem('authtoken')
        };

        return remote.post('user', '_logout', 'kinvey', userData);
    }

    return {
        register,
        login,
        logout
    }
})();