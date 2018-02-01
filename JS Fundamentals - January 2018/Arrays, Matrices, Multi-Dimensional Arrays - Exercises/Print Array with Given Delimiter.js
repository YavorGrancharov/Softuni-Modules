function delimiterConcat(strArr) {
    let delimiter = strArr[strArr.length - 1];
    let concat = [];
    for (let i = 0; i < strArr.length - 1; i++) {
        concat.push(strArr[i]);
        concat.push(delimiter);
    }
    console.log(concat.join('').slice(0, -1));
}
delimiterConcat(['One', 'Two', 'Three', 'Four', 'Five', '-']);