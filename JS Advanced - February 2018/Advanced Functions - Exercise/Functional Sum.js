let result = (function () {
    let sum = 0;
    return function add(n) {
        sum += n;
        add.toString = function () {
            return sum;
        };
        return add;
    }
})();
console.log(result(1)(6)(-3).toString());