let authService = (() => {
    function saveSession(userInfo) {
        let username = sessionStorage.setItem('username', userInfo.username);
        let userAuth = sessionStorage.setItem('authtoken', userInfo._kmd.authtoken);
        let userId = sessionStorage.setItem('userId', userInfo._id);
        let name = sessionStorage.setItem('name', userInfo.name);
    }

    function clearSession(userInfo) {
        return sessionStorage.clear(userInfo);
    }
    
    function isAuth() {
        return sessionStorage.getItem('authtoken') !== null
    }

    return {
        saveSession,
        clearSession,
        isAuth
    }
})();