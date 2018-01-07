function parseJSON(arr) {
    let obj = {};
    for (var i = 0; i < arr.length; i++) {
        let temp = JSON.parse(arr[i]);
        obj = temp;
        console.log(`Name: ${obj.name}`);
        console.log(`Age: ${obj.age}`);
        console.log(`Date: ${obj.date}`);
    }
}
parseJSON([{"name":"Gosho","age":10,"date":"19/06/2005"}]);