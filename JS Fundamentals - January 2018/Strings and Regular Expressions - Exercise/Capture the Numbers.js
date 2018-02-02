function captureNums(arr) {
    let regex = /\d+/g;
    let matches, output = [];
    while (matches = regex.exec(arr)) {
        output.push(matches[0])
    }
    console.log(output.join(' '));
}
captureNums(['The300 What is that? I think it’s the 3rd movie. Lets watch it at 22:45']);