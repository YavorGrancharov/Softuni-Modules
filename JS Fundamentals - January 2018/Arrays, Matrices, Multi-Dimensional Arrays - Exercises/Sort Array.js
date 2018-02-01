function sort(arr) {
    let res = arr.sort(function (a, b) {
        return a.length - b.length || a.localeCompare(b)
    });

    res.forEach(element => console.log(element));
}
sort(['alpha','beta', 'gamma']);