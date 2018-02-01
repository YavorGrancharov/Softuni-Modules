function extractSubseq(arr) {
    let sub = [];
    let current = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= current) {
            current = arr[i];
            sub.push(current);
        }
    }
    sub.forEach(element => console.log(element));
}
extractSubseq([0]);
extractSubseq([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extractSubseq([20, 3, 4, 6, 4]);