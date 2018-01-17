function numbersOneToN(n) {
    let result = '';
    for (let i = 1; i <= n; i++) {
        result += i;
    }
    return result;
}
console.log(numbersOneToN(12));