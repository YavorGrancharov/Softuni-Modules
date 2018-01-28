function biggestNum(matrix) {
    let min = Number.MIN_SAFE_INTEGER;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] > min) {
                min = matrix[row][col];
            }
        }
    }
    console.log(min);
}
biggestNum([[20, 50, 10], [8, 33, 145]]);