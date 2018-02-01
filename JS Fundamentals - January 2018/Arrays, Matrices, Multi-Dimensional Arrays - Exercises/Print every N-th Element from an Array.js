function printNth(strArr) {
    let nTh = Number(strArr[strArr.length - 1]);
    console.log(strArr[0]);
    for (let i = 1; i < strArr.length - 1; i++) {
        if (i % nTh === 0) {
            console.log(strArr[i]);
        }
    }
}
printNth(['5', '20', '31', '4', '20', '2']);