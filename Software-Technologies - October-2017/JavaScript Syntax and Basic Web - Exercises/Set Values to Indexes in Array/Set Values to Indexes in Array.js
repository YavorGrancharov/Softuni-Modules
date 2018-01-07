function valuesToIndexes(arr) {
    let n = Number(arr[0]);
    let str = [];
    for (let i = 1;i <= n; i++) {
        let temp = arr[i].split(' - ');
        let index = temp[0];
        let number = temp[1];
        str.push(number);
    }
    for (let i = 0; i < n; i++) {
        if (str[i] == undefined) {
            console.log(0);
        }
        else {
            console.log(str[i]);
        }
    }
}
valuesToIndexes(['3','0 - 5','1 - 6','2 - 7']);