let remote = (() => {
    const kinveyBaseUrl = "https://baas.kinvey.com/";
    const kinveyAppKey = "kid_SJobFhOBm";
    const kinveyAppSecret = "782af5140a634a54bdd77951616d5686";

    function makeAuth(type) {
        return type === 'basic'
            ?  'Basic ' + btoa(kinveyAppKey + ':' + kinveyAppSecret)
            :  'Kinvey ' + sessionStorage.getItem('authtoken');
    }

    function makeRequest(method, module, endpoint, auth) {
        let req;
        return req = {
            method,
            url: kinveyBaseUrl + module + '/' + kinveyAppKey + '/' + endpoint,
            headers: {
                'Authorization': makeAuth(auth)
            }
        };
    }

    function get (module, endpoint, auth) {
        return $.ajax(makeRequest('GET', module, endpoint, auth));
    }

    function post (module, endpoint, auth, data) {
        let req = makeRequest('POST', module, endpoint, auth);
        req.data = JSON.stringify(data);
        req.headers['Content-Type'] = 'application/json';
        return $.ajax(req);
    }

    function update (module, endpoint, auth, data) {
        let req = makeRequest('PUT', module, endpoint, auth);
        req.data = data;
        return $.ajax(req);
    }

    function remove (module, endpoint, auth) {
        return $.ajax(makeRequest('DELETE', module, endpoint, auth));
    }

    return {
        get,
        post,
        update,
        remove
    }
})();