function oddNums(arr) {
    let result = arr.filter((num, i) => i % 2 === 1).reverse();
    let output = result.map(function (element) {
        return element * 2
    });

    console.log(output.join(' '));
}
oddNums([10, 15, 20, 25]);