function uniqueSeq(arr) {
    let sort = (arr1, arr2, map) => map.get(arr1) - map.get(arr2);
    let arrays = new Map();
    for (let line of arr) {
        let array = JSON.parse(line).map(Number).sort((a,b) => b - a);
        let temp = `[${array.join(', ')}]`;
        if (!arrays.has(temp)) {
            arrays.set(temp, array.length)
        }
    }
    console.log([...arrays.keys()].sort((a,b) => sort(a,b,arrays)).join('\n'));
}
uniqueSeq(["[-3, -2, -1, 0, 1, 2, 3, 4]", "[10, 1, -17, 0, 2, 13]", "[4, -3, 3, -2, 2, -1, 1, 0]"]);
uniqueSeq(["[7.14, 7.180, 7.339, 80.099]", "[7.339, 80.0990, 7.140000, 7.18]", "[7.339, 7.180, 7.14, 80.099]"]);