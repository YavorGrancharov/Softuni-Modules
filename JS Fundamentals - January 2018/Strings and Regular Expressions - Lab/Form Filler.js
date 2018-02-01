function formFill(user, mail, number, arr) {
    let username = /(<![a-zA-Z]+!>)/g;
    let email = /(\<\@[a-zA-Z]+\@\>)/g;
    let phone = /(\<\+[a-z]+\+\>)/g;
    arr.forEach(line => {
        line = line.replace(username, user);
        line = line.replace(email, mail);
        line = line.replace(phone, number);
        console.log(line);
    });
}
formFill('Pesho', 'pesho@softuni.bg', '90-60-90',
['Hello, <!username!>!', 'Welcome to your Personal profile.', 'Here you can modify your profile freely.', 'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)', 'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)', 'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']);