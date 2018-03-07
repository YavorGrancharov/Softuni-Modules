class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        let xs = a.x - b.x, ys = a.y - b.y;
        xs *= xs;
        ys *= ys;

        return Math.sqrt(xs + ys);
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));