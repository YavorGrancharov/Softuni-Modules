function split(str, delimiter) {
    let splitter = str.split(delimiter);
    for (let i = 0; i < splitter.length; i++) {
        console.log(splitter[i]);
    }
}
split('One-Two-Three-Four-Five', '-');