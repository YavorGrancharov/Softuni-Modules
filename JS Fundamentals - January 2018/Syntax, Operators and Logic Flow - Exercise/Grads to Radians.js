function gradRad(n) {
    let grad = Number(n);

    grad = grad % 400;
    if (grad < 0) {
        grad += 400;
    }
    let degree = grad / 400 * 360;

    console.log(degree);
}
gradRad(850);