function addRemove(command) {
    let output = [];
    let num = 1;
    for (let i = 0; i < command.length; i++) {
        if (command[i] === 'add') {
            output.push(num);
        }
        else if (command[i] === 'remove') {
            output.pop();
        }
        num++;
    }
    if (output.length > 0) {
        for (let i = 0; i < output.length; i++) {
            console.log(output[i]);
        }
    }
    else {
        console.log('Empty');
    }
}
addRemove(['add', 'add', 'add', 'add']);
addRemove(['add', 'add', 'remove', 'add', 'add']);
addRemove(['remove', 'remove', 'remove']);