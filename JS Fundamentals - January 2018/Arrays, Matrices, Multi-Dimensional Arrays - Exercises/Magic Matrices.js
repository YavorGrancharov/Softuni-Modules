function magicMatrix(matrix) {
    let sum = matrix[0].reduce((a, b) => a + b);
    let isMagic = true;

    let rowSum = 0;
    let colSum = 0;
    for (let row = 1; row < matrix.length; row++) {
        for (let col = 0; col < matrix.length; col++) {
            rowSum += matrix[row][col];
            colSum += matrix[col][row];
        }
        if (sum === rowSum && sum === colSum) {
            isMagic = true;
        }
        else {
            isMagic = false;
        }
        rowSum = 0;
        colSum = 0;
        if (!isMagic) {
            break;
        }
    }
    if (isMagic) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
magicMatrix([[4, 5, 6],
            [6, 5, 4],
            [5, 5, 5]]);

magicMatrix([[11, 32, 45],
            [21, 0, 1],
            [21, 1, 1]]);