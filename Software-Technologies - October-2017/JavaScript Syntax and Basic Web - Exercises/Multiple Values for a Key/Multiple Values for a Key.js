function multipleValuesForKey(arr) {
    let obj = {};
    for (let i = 0; i < arr.length - 1; i++) {
        let temp = arr[i].split(' ');
        let key = temp[0];
        let value = temp[1];
        if (!obj.hasOwnProperty(key)) {
            obj[key] = new Array();
        }
        obj[key].push(value);
    }

    let out = arr[arr.length - 1];
    if (obj.hasOwnProperty(out)) {
        for (let value of obj[out]) {
            console.log(value);
        }
    }
    else {
        console.log('None');
    }
}
multipleValuesForKey(['key value','key eulav','test tset','key']);