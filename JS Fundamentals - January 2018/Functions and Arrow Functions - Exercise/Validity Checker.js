function valid([x1, y1, x2, y2]) {
    [x1, y1, x2, y2] = [x1, y1, x2, y2].map(Number);
    function check(x1, y1, x2, y2) {
        let dist = Math.sqrt(Math.pow((x1 - x2),2) + Math.pow((y1 - y2),2));
        if (dist % 1 == 0) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }
    check(x1, y1, 0, 0);
    check(x2, y2, 0, 0);
    check(x1, y1, x2, y2);
}
valid([3,0,0,4]);