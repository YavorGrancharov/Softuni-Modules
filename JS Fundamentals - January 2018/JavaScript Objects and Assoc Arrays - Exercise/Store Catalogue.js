function storeCatalog(arr) {
    let map = new Map();
    let chars = new Set();
    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(/\:/);
        let product = tokens[0];
        let price = Number(tokens[1]);
        let alphabetGroup = product.charAt(0);

        chars.add(alphabetGroup);

        if (!map.has(product)) {
            map.set(product, new Map())
        }
        map.set(product, price);
    }
    for (let char of Array.from(chars.keys()).sort()) {
        console.log(char);
        for (let product of Array.from(map.keys()).sort()) {
            if (product.startsWith(char)) {
                console.log(`  ${product.trim()}: ${map.get(product)}`);
            }
        }
    }
}

storeCatalog(['Appricot:20.4',
    'Fridge:1500',
    'TV:1499',
    'Deodorant:10',
    'Boiler:300',
    'Apple:1.25',
    'Anti-Bug Spray:15',
    'T-Shirt:10']);