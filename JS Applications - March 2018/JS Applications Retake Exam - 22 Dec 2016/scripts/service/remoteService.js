let remoteService = (() => {
    const KINVEY_BASE_URL = 'https://baas.kinvey.com/';
    const KINVEY_APP_KEY = 'kid_SJw1oyqnf';
    const KINVEY_APP_SECRET = 'df07ff813a4742a381ec6dd9fc4ba81c';

    function makeAuth(type) {
        return type === 'basic'
            ? 'Basic ' + btoa(KINVEY_APP_KEY + ':' + KINVEY_APP_SECRET)
            : 'Kinvey ' + sessionStorage.getItem('authtoken');
    }

    function request(method, module, endpoint, auth) {
        return req = {
            method,
            url: KINVEY_BASE_URL + module + '/' + KINVEY_APP_KEY + '/' + endpoint,
            headers: {
                'Authorization': makeAuth(auth)
            }
        }
    }

    function get(module, endpoint, auth) {
        return $.ajax(request('GET', module, endpoint, auth));
    }

    function post(module, endpoint, auth, data) {
        let req = request('POST', module, endpoint, auth);
        req.data = JSON.stringify(data);
        req.headers['Content-Type'] = 'application/json';

        return $.ajax(req);
    }

    function update(module, endpoint, auth, data) {
        let req = request('PUT', module, endpoint, auth);
        req.data = data;

        return $.ajax(req);
    }

    function remove(module, endpoint, auth) {
        return $.ajax(request('DELETE', module, endpoint, auth));
    }

    return {
        get,
        post,
        update,
        remove
    }
})();