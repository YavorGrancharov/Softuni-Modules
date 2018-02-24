let closure = (function () {
    let str = '';
    let commands = {
        append: (s) => str += s,
        removeStart: (n) => str = str.substring(n),
        removeEnd: (n) => str = str.substring(0, str.length - n),
        print: () => console.log(str)
    };
    return function (arr) {
        for (let element of arr) {
            let [command, value] = element.split(' ');
            commands[command](value);
        }
        return str;
    }

})();


function commandPro(arr) {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(' ');
        let command = tokens[0];
        let param = tokens[1];
        switch (command) {
            case 'append':
                result = result.concat(param);
                break;
            case 'removeStart':
                if (Number(param) > 0 && Number(param) < result.length - 1) {
                    result = result.substring(Number(param));
                }
                break;
            case 'removeEnd':
                if (Number(param) > 0 && Number(param) < result.length - 1) {
                    result = result.substring(0, result.length - Number(param));
                }
                break;
            case 'print':
                console.log(result);
                break;
        }
    }
}
closure(['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print']);

commandPro(['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print']);

commandPro(['append 123',
    'append 45',
    'removeStart 2',
    'removeEnd 1',
    'print']);