function fit(box, bottle) {
    let result = Math.ceil(Math.min(Number(box) / Number(bottle)));

    console.log(result);
}
fit(5, 10);