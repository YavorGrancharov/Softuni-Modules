function findVariable(str) {
    let regex = /^_([a-zA-Z0-9]*)$/;
    let splitted = str.split(/\s+/);
    let matches, result = [];
    for (let obj of splitted) {
        if (matches = regex.exec(obj)) {
            result.push(matches[1]);
        }
    }
    console.log(result.join(','))
}
findVariable('The _id and _age variables are both integers.');