let closure = (function () {
    let array = [];
    return function processor(arr) {
        for (let i = 0; i < arr.length; i++) {
            let current = arr[i];
            let tokens = current.split(' ');
            let command = tokens[0];
            let element = tokens[1];
            switch (command) {
                case 'add':
                    array.push(element);
                    break;
                case 'remove':
                    array = array.filter(w => w !== element);
                    break;
                case 'print':
                    return array.join(',');
                    break;
            }
        }
    }
})();

function processCommands(commands) {
    let commandProcessor = (function () {
        let list = [];
        return {
            add: (newItem) => list.push(newItem),
            remove: (item) => list = list.filter(x => x !== item),
            print: () => console.log(list.join(','))
        }
    })();
    for (let cmd of commands) {
        let [command, arg] = cmd.split(' ');
        commandProcessor[command](arg);
    }
}

processCommands(['add hello', 'add again', 'remove hello', 'add again', 'print']);

console.log(closure(['add pesho', 'add gosho', 'add pesho', 'remove pesho', 'print']));