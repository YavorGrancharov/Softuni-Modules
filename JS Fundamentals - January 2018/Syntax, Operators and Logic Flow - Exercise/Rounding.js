function round(arr) {
    let num = Number(arr[0]);
    let round = Number(arr[1]);

    if (round <= 15) {
        num = Number(num.toFixed(round));
    }
    else {
        num = Number(num.toFixed(15));
    }

    console.log(num);
}
round([3.1415926535897932384626433832795, 2]);