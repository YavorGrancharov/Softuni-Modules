function calcVat(arr) {
    let sum = 0;
    let vat = 0;
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    vat = sum * 0.20;
    total = sum + vat;

    console.log(`sum = ${sum}`);
    console.log(`VAT = ${vat}`);
    console.log(`total = ${total}`);
}
calcVat([1.20,2.60,3.50]);