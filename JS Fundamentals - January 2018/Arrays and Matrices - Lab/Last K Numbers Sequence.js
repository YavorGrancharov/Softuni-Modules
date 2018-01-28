function lastK(n, k) {
    let arr = [1];
    for (let i = 1; i < n; i++) {
        arr[i] = arr
            .slice(Math.max(0, arr.length - k), i + k)
            .reduce((a, b) => {return a + b});
    }
    console.log(arr);
}
lastK(6,3);