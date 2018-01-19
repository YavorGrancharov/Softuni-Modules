function _3D(arr) {
    let x1 = Number(arr[0]);
    let y1 = Number(arr[1]);
    let z1 = Number(arr[2]);

    let x2 = Number(arr[3]);
    let y2 = Number(arr[4]);
    let z2 = Number(arr[5]);

    let result = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2) + Math.pow(z1 - z2, 2));
    console.log(result);
}
_3D([1,1,0,5,4,0]);