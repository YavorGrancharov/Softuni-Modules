function matchWords(input) {
    let regex = input.match(/\w+/g);
    let concat = '';
    for (let obj of regex) {
        concat += obj + '|';
    }
    console.log(concat = concat.substring(0, concat.length - 1));
}
matchWords('A Regular Expression needs to have the global flag in order to match all occurrences in the text');