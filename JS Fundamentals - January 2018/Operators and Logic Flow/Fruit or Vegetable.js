 function market(input) {
    if (input === 'banana' || input === 'kiwi'
        || input === 'cherry' || input === 'apple'
        || input === 'lemon' || input === 'grapes' || input === 'peach') {
        console.log('fruit');
    }
    else if (input === 'tomato' || input === 'cucumber' || input === 'pepper'
        || input === 'onion' || input === 'garlic' || input === 'parsley') {
        console.log('vegetable');
    }
    else {
        console.log('unknown');
    }
}
market('pizza');