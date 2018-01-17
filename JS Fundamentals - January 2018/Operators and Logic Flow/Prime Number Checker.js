function isPrime(number) {
    if (typeof number !== 'number' || !Number.isInteger(number)) {
        return false;
    }

    if (number < 2) {
        return false;
    }

    if (number === 2) {
        return true;
    }
    else if (number % 2 === 0) {
        return false;
    }

    for (let i = 3; i * i <= number; i += 2) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;

}
console.log(isPrime(0));