function addRemoveElements(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i].split(' ');
        let command = temp[0];
        let argument = Number(temp[1]);
        switch (command) {
            case "add":
                newArr.push(argument);
                break;
            case "remove":
                newArr.splice(argument,1);
                break;
        }
    }
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] != undefined) {
            console.log(newArr[i]);
        }
    }
}
addRemoveElements(['add 3','add 5','add 7','remove 1']);