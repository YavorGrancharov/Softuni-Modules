function firstLastK(arr) {
    let K = Number(arr[0]);
    let firstK = arr.slice(1, K + 1).join(' ');
    let lastK = arr.slice(arr.length - K).join(' ');
    console.log(firstK);
    console.log(lastK);
}
firstLastK([3,
    6, 7, 8, 9]);