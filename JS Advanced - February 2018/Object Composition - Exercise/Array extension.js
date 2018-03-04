(function () {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };
    Array.prototype.skip = function (n) {
        return this.slice(n);
    };
    Array.prototype.take = function (n) {
        return this.slice(0, n);
    };
    Array.prototype.sum = function () {
        return this.reduce((a, b) => a + b);
    };
    Array.prototype.average = function () {
        return this.reduce((a, b) => a + b) / this.length;
    }
})();


let testArr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(`Original Array - [${testArr}]`);

console.log(`Last - ${testArr.last()}`);

console.log(`Skip 2 - ${testArr.skip(6)}`);

console.log(`Take 2 - ${testArr.take(2)}`);

console.log(`Sum - ${testArr.sum()}`);

console.log(`Sum - ${testArr.average()}`);