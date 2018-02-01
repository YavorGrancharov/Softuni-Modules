function rotateArr(arr) {
    let len = arr.length - 1;
    let nTh = Number(arr.pop());
    let output = arr.slice(len - nTh).concat(arr.slice(0, len - nTh));
    console.log(output.join(' '));
}
rotateArr(['1', '2', '3', '4', '2']);