function username(input) {
    let regex = /([\w-]+)\@(\w).*?(\.).*?([\w]{1})(?:\w+)(?:\.)*(\w?)/;
    let matches, output = [];
    let concat = '';
    for (let i = 0; i < input.length; i++) {
        if (matches = regex.exec(input[i])) {
            concat += matches[1] + matches[3] + matches[2] + matches[4] + matches[5] + ', ';
        }
    }
    concat = concat.replace(/,\s*$/, "");
    console.log(concat);
}
username(['peshoo@gmail.com','todor_43@mail.dir.bg', 'foo@bar.com']);