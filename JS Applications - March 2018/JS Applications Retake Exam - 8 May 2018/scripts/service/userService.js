const userService = (() => {
    function register(username, password, repeatPass) {
        let userData = {
            username: username,
            password: password
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
        let data = {
            authtoken: sessionStorage.getItem('authtoken')
        };

        return remote.post('user', '_logout', 'kinvey', data);
    }

    return {
        register,
        login,
        logout
    }
})();