function sumFirstLast(arr) {
    arr = arr.map(Number);
    let last = 0;
    let sum = 0;
    if (arr.length > 1) {
        last = arr.pop();
        sum = arr[0] + last;
    }
    else {
        last = arr[0];
        sum = arr[0] + arr[0];
    }
    console.log(sum);
}
sumFirstLast(['5']);