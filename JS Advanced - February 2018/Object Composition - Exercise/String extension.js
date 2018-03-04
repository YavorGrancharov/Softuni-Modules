(function () {
    String.prototype.ensureStart = function (str) {
        if (this.toString().startsWith(str)) {
            return this.toString()
        } else {
            return str + this.toString()
        }
    };
    String.prototype.ensureEnd = function (str) {
        if (this.toString().endsWith(str)) {
            return this.toString()
        } else {
            return this.toString() + str
        }
    };
    String.prototype.isEmpty = function () {
        if (this.length !== 0) {
            return false
        } else {
            return true
        }
    };
    String.prototype.truncate = function (n) {
        let localStr = this.toString();

        if (n > localStr.length - 1) {
            return localStr
        }

        if (n < 4) {
            return '.'.repeat(n)
        }

        while (localStr.lastIndexOf(' ') !== -1) {
            if (localStr.lastIndexOf(' ') <= n-2) {
                return localStr.substring(0, localStr.lastIndexOf(' ')) + '.'.repeat(3)
            }
            localStr = localStr.substring(0, localStr.lastIndexOf(' '))
        }

        return localStr.substring(0, n-3) + '.'.repeat(3)
    };
    String.format = function (str, ...params) {
        for (let i = 1; i < arguments.length; i++) {
            str = str.replace('{' + (i - 1) + '}', arguments[i]);
        }
        return str
    }
})();

let str = 'the quick brown fox jumps over the lazy dog';

console.log(`Original value: ${str}`);

console.log(`Ensure start: ${str = str.ensureStart('the ')}`);

console.log(`Ensure start: ${str = str.ensureStart('the ')}`);

console.log(`Ensure end: ${str = str.ensureEnd(' dog')}`);

console.log(`Truncate: ${str = str.truncate(10)}`); // the...

console.log(`Truncate: ${str = str.truncate(25)}`); // the quick brown fox...

console.log(`Truncate: ${str = str.truncate(43)}`); // the quick brown fox jumps over the lazy dog

console.log(`Truncate: ${str = str.truncate(45)}`);

//console.log(`Truncate: ${str = str.truncate(2)}`);

console.log(`Format: ${str = String.format('The {0} {1} fox', 'quick', 'brown')}`);

console.log(`Format: ${str = String.format('jumps {0} {1}', 'dog')}`);

console.log(`Is empty: ${str = str.isEmpty()}`);