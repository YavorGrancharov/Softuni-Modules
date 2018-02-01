function aggregateTable(str) {
    let regex = /(?:\|)\s*([a-zA-Z ]*)(?:\s\|)\s*([0-9]*)/;
    let matches, towns  = [];
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        if (matches = regex.exec(str[i])) {
            towns.push(matches[1].trim());
            sum += Number(matches[2]);
        }
    }
    console.log(towns.join(', '));
    console.log(sum);
}
aggregateTable(['| Sofia           | 300',
'    | Veliko Tarnovo  | 500',
'| Yambol          | 275']);

aggregateTable(['| Sofia | 300', '| Veliko Tarnovo | 500', '| Yambol | 275']);