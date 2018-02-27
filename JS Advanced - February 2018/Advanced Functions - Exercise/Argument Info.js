function args() {
    let map = new Map();
    for (let obj of arguments) {
        console.log(`${typeof obj}: ${obj}`);
        if (!map.has(typeof obj)) {
            map.set(typeof obj, 0);
        }

        let count= Number(map.get(typeof obj));
        map.set(typeof obj, ++count);
    }

    map = new Map([...map].sort((a, b) => {
        return b[1] - a[1];
    }));

    for (const [element, count] of map) {
        console.log(`${element} = ${count}`);
    }
}
args('cat', 42, function () { console.log('Hello world!'); });

args({ name: 'bob'}, 3.333, 9.999);