function cooking(arr) {
    let num = Number(arr[0]);
    let operations = {
        chop: (num) => num / 2,
        dice: (num) => Math.sqrt(num),
        spice: (num) => ++num,
        bake: (num) => num * 3,
        fillet: (num) => num * 0.8
    };

    let chop = (num) => num / 2;
    let dice = (num) => Math.sqrt(num);
    let spice = (num) => ++num;
    let bake = (num) => num * 3;
    let fillet = (num) => num * 0.8;

    for (let i = 1; i < arr.length; i++) {
        const operation = arr[i];
        try {
            num = operations[operation](num);
            console.log(num);
        }catch (error) {
            console.log('Invalid operation');
        }
    }
}
cooking([32, 'chop', 'chop', 'chop', 'chop', 'chop']);