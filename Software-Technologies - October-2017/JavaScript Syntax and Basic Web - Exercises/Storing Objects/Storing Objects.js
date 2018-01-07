function storingObjects(arr) {
    let obj = {};
    for (var i = 0; i < arr.length; i++) {
        let temp = arr[i].split(" -> ");
        let name = temp[0];
        let age = temp[1];
        let grade = temp[2];
        obj = {Name: name, Age: age, Grade: grade};
        console.log("Name: " + obj.Name);
        console.log("Age: " + obj.Age);
        console.log("Grade: " + obj.Grade);
    }
}
storingObjects(['Pesho -> 13 -> 6.00','Ivan -> 12 -> 5.57','Toni -> 13 -> 4.90']);