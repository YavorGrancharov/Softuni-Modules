function countWithMap(arr) {
    let map = new Map();
    let count = 1;
    let splitted = arr[0].split(/\W+/).filter(s => s.trim() !== '');
    for (let word = 0; word < splitted.length; word++) {
        splitted[word] = splitted[word].toLowerCase();
        if (map.has(splitted[word])) {
            map.set(splitted[word], map.get(splitted[word]) + count);
        } else {
            map.set(splitted[word], count);
        }
    }
    let sortedKeys = Array.from(map.keys()).sort((a,b) => a.localeCompare(b));
    for (let key of sortedKeys) {
        console.log(`'${key}'` + ' -> ' + map.get(key) + ' times');
    }
}
countWithMap(['Far too slow, you’re far too slow.']);