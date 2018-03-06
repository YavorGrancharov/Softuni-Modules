function validateRequest(obj) {
    const method = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const version = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const uriRegExp = /^[A-Za-z0-9.]+$|^\*$/gmi;
    const messageRegExp = /^[^<>\\&'"]*$/gmi;

    let mapProp = {
        method: 'Method',
        version: 'Version',
        uri: 'URI',
        message: 'Message'
    };

    let validate = {
        method: () => {
            if (!obj.hasOwnProperty('method')) {
                return false
            }
            if (!method.includes(obj['method'])) {
                return false
            }
            return true
        },
        uri: () => {
            if (!obj.hasOwnProperty('uri')) {
                return false
            }
            if (!uriRegExp.test(obj['uri'])) {
                return false
            }
            return true
        },
        version: () => {
            if (!obj.hasOwnProperty('version')) {
                return false
            }
            if (!version.includes(obj['version'])) {
                return false
            }
            return true
        },
        message: () => {
            if (!obj.hasOwnProperty('message')) {
                return false
            }
            if (!messageRegExp.test(obj['message'])) {
                return false
            }
            return true
        }
    };
    for (let prop in validate) {
        if (!validate[prop]()) {
            throw new Error(`Invalid request header: Invalid ${mapProp[prop]}`)
        }
        console.log(prop + ': ' + obj[prop])
    }
    return obj
}

validateRequest({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
});

validateRequest({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
});

validateRequest({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
});