function triangleDollars(n) {
    let dollar = '$';
    for (let i = 1; i <= n; i++) {
        console.log(dollar.repeat(i));
    }
}
triangleDollars(3);