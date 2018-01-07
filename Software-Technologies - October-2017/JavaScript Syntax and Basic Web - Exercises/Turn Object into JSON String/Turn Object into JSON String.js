function stringifyJSON(arr) {
    let obj = {};
    for (var i = 0; i < arr.length; i++) {
        let temp = arr[i].split(' -> ');
        let key = temp[0];
        let value = temp[1];
        if(!isNaN(value)) {
            value = Number(value);
        }
        obj[key] = value;
    }
    console.log(JSON.stringify(obj));
}
stringifyJSON(["name -> Yavor","surename -> Boyanov","age -> 20","grade -> 6.00","date -> 23/05/1995","town -> Sofia"]);