function keyValue(arr) {
    let obj = {};
    for (let i = 0; i < arr.length - 1; i++) {
        let temp = arr[i].split(' ');
        let key = temp[0];
        let value = temp[1];
        obj[key] = value;
    }
    let key = arr[arr.length - 1];
    if (obj.hasOwnProperty(key)) {
        console.log(obj[key]);
    }
    else {
        console.log('None');
    }
}
keyValue(['key value','key eulav','test tset','key']);