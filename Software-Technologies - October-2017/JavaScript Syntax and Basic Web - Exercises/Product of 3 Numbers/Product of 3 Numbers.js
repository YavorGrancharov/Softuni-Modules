function productOfThreeNumbers(arr) {
    let x = Number(arr[0]);
    let y = Number(arr[1]);
    let z = Number(arr[2]);

    let count = 0;
    if (x < 0) {
        count++;
    }
    if (y < 0) {
        count++;
    }
    if (z < 0) {
        count++;
    }
    if (count % 2 == 0) {
        console.log('Positive');
    } else {
        console.log('Negative');
    }
}