function capitalCaseWords(arr) {
    let text = arr.join(",");
    let words = text.split(/\W+/);
    let nonEmpty = words.filter(p => p.length > 0);
    let upCase = nonEmpty.filter(isUppercase);
    console.log(upCase.join(", "));

    function isUppercase(str) {
        return str === str.toUpperCase();
    }
}