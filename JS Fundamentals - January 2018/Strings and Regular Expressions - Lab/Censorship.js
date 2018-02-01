function censor(text, arr) {
    for (let obj of arr) {
        let regex = new RegExp(obj, 'g');
        let dashes = '-'.repeat(obj.length);
        text = text.replace(regex, dashes);
    }
    console.log(text);
}
censor('roses are red, violets are blue', [', violets are', 'red']);

function censor2(text, arr) {
    for (let current of arr) {
        let replaced = '-'.repeat(current.length);
        while (text.indexOf(current) > -1) {
            text = text.replace(current, replaced);
        }
    }
    console.log(text);
}
censor2('roses are red, violets are blue', [', violets are', 'red']);