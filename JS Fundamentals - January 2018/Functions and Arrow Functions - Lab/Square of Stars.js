function square(n) {
    if (n !== null) {
        for (let i = 1; i <= n; i++) {
            console.log('* '.repeat(n));
        }
    }
    else {
        for (let i = 1; i <= 5; i++) {
           console.log('* '.repeat(5))
        }
    }
}
square(2);