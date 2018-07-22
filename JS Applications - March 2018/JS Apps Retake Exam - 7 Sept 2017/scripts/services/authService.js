let authService = (() => {
    function saveSession(userInfo) {
        let userAuth = userInfo._kmd.authtoken;
        sessionStorage.setItem('authtoken', userAuth);
        let userId = userInfo._id;
        sessionStorage.setItem('userId', userId);
        let username = userInfo.username;
        sessionStorage.setItem('username', username);
        let subscriptions = JSON.stringify(userInfo.subscriptions);
        sessionStorage.setItem('subscriptions', subscriptions);
    }

    function isAuth() {
        return sessionStorage.getItem('authtoken') !== null;
    }

    return {
        saveSession,
        isAuth
    }
})();