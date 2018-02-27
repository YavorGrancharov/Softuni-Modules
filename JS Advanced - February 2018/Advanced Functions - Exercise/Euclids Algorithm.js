let euclid = (function () {
    let divisor = 0;
    return function gcd(num1, num2) {
        let reminder = 0;
        reminder = num1 % num2;
        if (reminder === 0) {
            return num2;
        }
        else {
            return gcd(num2, reminder);
        }
    }
})();

console.log(euclid(252, 105));

console.log(euclid(10, 100));