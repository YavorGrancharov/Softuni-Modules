function population(arr) {
    let map = new Map();
    for (let word = 0; word < arr.length; word++) {
        let splitted = arr[word].split(/\s\<\-\>\s/);
        let town = splitted[0];
        let population = Number(splitted[1]);
        map.has(town)
            ? map.set(town, map.get(town) + population)
            : map.set(town, population);
    }
    for (let [town, population] of map) {
        console.log(town + ' : ' + population);
    }
}

population(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);

population(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);