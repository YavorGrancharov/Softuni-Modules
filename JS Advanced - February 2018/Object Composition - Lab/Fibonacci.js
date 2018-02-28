let fib = (function () {
    return function fibResult () {
        let result = [1, 1, 2];
        let current = 0;
        for (let i = 3; i < n; i++) {
            current = result[result.length - 1] + result[result.length - 2];
            result.push(current)
        }
        console.log(result);
    }
})();

console.log(fib(5));

console.log(fib(15));