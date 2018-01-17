function leap(year) {
    let res = '';
    if (Number(year) % 4 === 0 && (Number(year) % 100 !== 0)|| Number(year) % 400 === 0) {
        res = 'yes';
    }
    else {
        res = 'no';
    }
    console.log(res);
}
leap(1900);