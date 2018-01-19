function distance(arr) {
    let obj = {};
    let v1 = Number(arr[0]);
    let v2 = Number(arr[1]);
    let time = Number(arr[2]);

    obj = {v1: v1, v2: v2, time: time};

    let dist1 = obj.v1 * (obj.time / 60 / 60);
    let dist2 = obj.v2 * (obj.time / 60 / 60);

    console.log(Math.abs(dist1 - dist2) * 1000);
}
distance([0,60,3600]);