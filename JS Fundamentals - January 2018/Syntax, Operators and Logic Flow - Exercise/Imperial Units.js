function unit(n) {
    let feet = Math.floor(n / 12);
    let reminder = n % 12;
    console.log(`${feet}'-${reminder}"`);
}
unit(55);