let authService = (() => {
    function saveSession(userInfo) {
        let username = sessionStorage.setItem('username', userInfo.username);
        let userId = sessionStorage.setItem('userId', userInfo._id);
        let userAuth = sessionStorage.setItem('authtoken', userInfo._kmd.authtoken);
        let name = sessionStorage.setItem('name', userInfo.name);
    }

    function isAuth() {
        return sessionStorage.getItem('authtoken') !== null;
    }

    function clearSession(data) {
        return sessionStorage.clear(data);
    }

    return {
        saveSession,
        isAuth,
        clearSession
    }
})();