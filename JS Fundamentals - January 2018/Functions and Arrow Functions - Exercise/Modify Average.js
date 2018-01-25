function modifyAverage(num) {
    let numStr = String(num);
    //                string 101 =>             1 0 1
    let getAverage = (numString) => numStr.split('')
        .map(Number)
        .reduce((a,b) => a + b, 0) / numStr.length;

    while (getAverage() <= 5) {
        numStr += '9';
    }
    console.log(numStr);
}
let num = 101;
modifyAverage(num);