function sortArr(arr, arg) {
    let asc = function (a,b) {
        return a - b;
    };
    let desc = function (a,b) {
        return b - a;
    };
    let sorter = {
        asc: asc,
        desc: desc
    };

    return arr.sort(sorter[arg]);
}
console.log(sortArr([14, 7, 17, 6, 8], 'asc'));