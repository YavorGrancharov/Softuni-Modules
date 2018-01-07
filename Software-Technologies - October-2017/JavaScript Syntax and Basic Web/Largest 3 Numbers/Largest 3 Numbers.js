function largestThreeNumbers(arr) {
    let nums = arr.map(Number);
    let numsSort = nums.sort((a, b) => b - a);
    let count = Math.min(3, arr.length);
    for (let i = 0; i < count; i++) {
        console.log(numsSort[i]);
    }
}