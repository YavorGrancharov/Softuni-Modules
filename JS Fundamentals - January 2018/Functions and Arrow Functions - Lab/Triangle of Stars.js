function stars(n) {
    for (let i = 1; i <= n; i++) {
        console.log('*'.repeat(i))
    }
    for (let j = n - 1; j >= 1; j--) {
        console.log('*'.repeat(j))
    }
}
stars(5);