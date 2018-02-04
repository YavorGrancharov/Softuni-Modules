function cappyJuice(arr) {
    let juices = new Map();
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(/\s\=\>\s/);
        let juice = tokens[0];
        let quantity = Number(tokens[1]);

        juices.has(juice)
            ? juices.set(juice, juices.get(juice) + quantity)
            : juices.set(juice, quantity);
    }
    let bottle = 1000;
    for (let [juice, bottles] of juices) {
        if (bottles >= bottle) {
            console.log(`${juice} => ${Math.floor(bottles / bottle)}`)
        }
    }
}

cappyJuice(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']);

cappyJuice(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']);