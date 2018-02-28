function inherit(input) {
    let exec = (function () {
        let res = {};

        function create(arr) {
            if (arr.length === 4) {
                res[arr[1]] = Object.create(res[arr[3]]);
            }
            else if (arr.length === 2) {
                res[arr[1]] = {};
            }
        }

        function set(arr) {
            res[arr[1]][arr[2]] = arr[3];
        }

        function print(arr) {
            let local = [];
            for (let key in res[arr[1]]) {
                local.push(key + ':' + res[arr[1]][key]);
            }
            console.log(local.join(', '));
        }

        return {create, set, print};
    })();
    for (let str of input) {
        let args = str.split(' ');
        let command = args[0];
        exec[command](args)
    }
}

inherit(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
);