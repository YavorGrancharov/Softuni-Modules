function usernames(arr) {
    let userNames = new Set();
    for (let user = 0; user < arr.length; user++) {
        userNames.add(arr[user]);
    }
    let sortedSet = Array.from([...userNames.values()]).sort(function (a,b) {
        return a.length - b.length || a.localeCompare(b);
    });
    for (let obj of sortedSet) {
        console.log(obj)
    }
}

usernames(['Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston']);