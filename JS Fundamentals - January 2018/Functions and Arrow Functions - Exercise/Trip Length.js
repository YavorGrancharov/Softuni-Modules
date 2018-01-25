function tripLength(input) {
    let [x1, y1, x2, y2, x3, y3] = input.map(Number);

    let distance = (x1, y1, x2, y2) => Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));

    let distance123 = distance(x1, y1, x2, y2) + distance(x2, y2, x3, y3);
    let distance132 = distance(x1, y1, x3, y3) + distance(x3, y3, x2, y2);
    let distance213 = distance(x2, y2, x1, y1) + distance(x1, y1, x3, y3);

    let shortestPath = Math.min(distance123, distance132, distance213);

    if (shortestPath === distance123) {
        console.log(`1->2->3: ${shortestPath}`);
        return;
    }
    if (shortestPath === distance132) {
        console.log(`1->3->2: ${shortestPath}`);
        return;
    }
    if (shortestPath === distance213) {
        console.log(`2->1->3: ${shortestPath}`);
        return;
    }
}
tripLength([0, 0, 2, 0, 4, 0]);