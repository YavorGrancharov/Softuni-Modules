function oddEven(n) {
    if (n % 1 === 0) {
        if (n % 2 === 0) {
            console.log('even');
        }
        else {
            console.log('odd');
        }
    }
    else {
        console.log('invalid');
    }
}
oddEven(1.5);