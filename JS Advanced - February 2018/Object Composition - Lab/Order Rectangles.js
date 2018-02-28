function order(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = {
            width: matrix[i][0],
            height: matrix[i][1],
            area: function () {
                return this.width * this.height
            },
            compareTo: function (next) {
                let diff = next.area() - this.area();
                return diff || next.width - this.width
            }
        }
    }
    matrix = matrix.sort((a,b) => a.compareTo(b));
    return matrix;
}

console.log(order([[10,5],[5,12]]));