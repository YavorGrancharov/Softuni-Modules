let auth = (() => {

    function isAuthtenticated() {
        return localStorage.getItem('authtoken');
    }

    function saveSession(userData) {
        localStorage.setItem('authtoken', userData._kmd.authtoken);
        localStorage.setItem('username', userData.username);
        localStorage.setItem('userId', userData._id);
    }

    function register(username, password) {
        let obj = {username, password};
        remote.post('user', '', 'basic', obj)
            .then(saveSession)
            .catch(console.error)
    }

    function login(username, password) {
        let obj = {username, password};
        return remote.post('user', 'login', 'basic', obj)
    }

    function logout() {
        remote.post('user', '_logout', 'kinvey')
            .then(() => {
                localStorage.clear();
            })
            .catch(console.error)
    }

    return {
        isAuthtenticated,
        saveSession,
        register,
        login,
        logout
    }
})();