function toUpper(str) {
    console.log(str.toUpperCase()
        .split(/\W+/)
        .filter(w => w !== '')
        .join(', '));
}
toUpper('Hi, how are you?');