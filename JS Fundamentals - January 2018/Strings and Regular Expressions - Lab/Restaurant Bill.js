function bill(input) {
    let regex = /([a-zA-Z]*\s?[a-zA-Z]*)([0-9]*\.?[0-9]*)/;
    let matches, output = [];
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        if (matches = regex.exec(input[i])) {
            output.push(matches[1]);
            sum += Number(matches[2]);
        }
    }
    console.log(`You purchased ${output
        .join(', ')
        .replace(/^[,\s]+|[,\s]+$/g, '')
        .replace(/,[,\s]*,/g, ',')
        .trim()} for a total sum of ${sum}`);
}
bill(['Beer Zagorka'  , '2.65', 'Triple soup', '7.80','Lasagna', '5.69']);