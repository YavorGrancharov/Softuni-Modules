function sumsByTown(arr) {
    let obj = {};
    let temp = null;
    for (let i = 0; i < arr.length; i += 2) {
        if (obj.hasOwnProperty(arr[i])) {
            obj[arr[i]] += Number(arr[i + 1]);
        } else {
            obj[arr[i]] = Number(arr[i + 1]);
        }
    }
    console.log(JSON.stringify(obj));
}

sumsByTown(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4']);