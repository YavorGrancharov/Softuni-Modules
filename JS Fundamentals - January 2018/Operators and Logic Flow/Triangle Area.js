function area(a, b, c) {
    let expression = (a + b + c) / 2;
    let area = Math.sqrt(expression*(expression - a) * (expression - b) * (expression - c));

    console.log(`${area.toFixed(10)}`);
}
area(2,3.5,4);