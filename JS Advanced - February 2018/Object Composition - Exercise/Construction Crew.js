function result(obj) {
    if (obj.handsShaking === true) {
        obj.bloodAlcoholLevel += Number(obj.experience) * (0.1 * Number(obj.weight));
        obj.handsShaking = false;
    }
    else {

    }
    return obj;
}

let worker = console.log(result({ weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true }
));
