function solution(arr) {
    aggregate(0,(a, b) => {return a + b});
    aggregate(0, (a, b) => {return a + 1 / b});
    aggregate('', (a, b) => {return a + b});
    function aggregate(value, arrow) {
        for (let i = 0; i < arr.length; i++) {
            value = arrow(value, arr[i]);
        }
        console.log(value);
    }
}
solution([1, 2, 3]);