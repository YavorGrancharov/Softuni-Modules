function sort(arr) {
    let sorted = [];
    arr.forEach(function (element) {
        if (element >= 0) {
            sorted.push(element);
        }
        else {
            sorted.unshift(element);
        }
    });
    for (let i = 0; i < sorted.length; i++) {
        console.log(sorted[i]);
    }
}
sort([7, -2, 8, 9]);