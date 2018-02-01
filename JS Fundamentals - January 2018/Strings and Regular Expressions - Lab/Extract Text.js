function extract(input) {
    let result = [];
    const regex = /(?:\()([\w\d\s!?.-|+<>@#$%^&*()_":'\\/~`]*)(?:\))/g;
    let matches, output = [];
    while (matches = regex.exec(input)) {
        output.push(matches[1]);
    }
    console.log(output.join(', '));
}
extract('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');