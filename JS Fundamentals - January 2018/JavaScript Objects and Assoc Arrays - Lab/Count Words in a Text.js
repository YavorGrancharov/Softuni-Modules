function countWords(arr) {
    let obj = {};
    let count = 1;
    let splitted = arr[0].split(/\W+/);
    for (let i = 0; i < splitted.length; i++) {
        if (obj.hasOwnProperty(splitted[i])) {
            obj[splitted[i]] += count;
        }
        else {
            obj[splitted[i]] = count;
        }
    }
    delete obj[""];
    console.log(JSON.stringify(obj));
}
countWords(['Far too slow, you’re far too slow.']);