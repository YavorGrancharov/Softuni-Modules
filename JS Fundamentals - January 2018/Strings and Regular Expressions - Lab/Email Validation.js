function validEmail(input) {
    let regex = /^([a-zA-Z0-9]+\@[a-z]+\.[a-z]+)$/i;
    if (regex.exec(input)) {
        console.log('Valid');
    }
    else {
        console.log('Invalid');
    }
}
validEmail('valid@email.bg');