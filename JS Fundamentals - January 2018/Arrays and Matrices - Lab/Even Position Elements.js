function evenPos(arr) {
    console.log(arr.filter((element, i) => {
        return i % 2 === 0
    }).join(' '));
}
evenPos(['20','30','40']);