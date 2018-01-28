function diagonalSum(matrix) {
    let leftRight = 0;
    let rightLeft = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row === col) {
                leftRight += matrix[row][col];
                rightLeft += matrix[row][matrix.length - row - 1];
            }
        }
    }
    console.log(leftRight + ' ' + rightLeft);
}
diagonalSum([[3, 5, 17],
            [-1, 7, 14],
            [1, -8, 89]]);