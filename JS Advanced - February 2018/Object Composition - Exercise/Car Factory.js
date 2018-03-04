function car(obj) {
    return obj = {
        model: obj.model,
        engine: {
            power: (() => {
                if (obj.power <= 90) {
                    return 90
                }
                else if (obj.power > 90 && obj.power <= 120) {
                    return 120
                }
                else {
                    return 200
                }
            })(),
            volume: (() => {
                if (obj.power <= 90) {
                    return 1800
                }
                else if (obj.power > 90 && obj.power <= 120) {
                    return 2400
                }
                else {
                    return 3500
                }
            })()
        },
        carriage: {
            type: obj.carriage,
            color: obj.color
        },
        wheels: (() => {
            if (obj.wheelsize % 2 !== 0) {
                return Array(4).fill(obj.wheelsize)
            }
            else {
                return Array(4).fill(2 * Math.floor(obj.wheelsize / 2) - 1)
            }
        })()
    }
}

console.log(car({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));

console.log(car({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));

console.log(car({
    model: 'Ferrari',
    power: 200,
    color: 'red',
    carriage: 'coupe',
    wheelsize: 21
}));

console.log(car({
    model: 'Brichka',
    power: 65,
    color: 'white',
    carriage: 'hatchback',
    wheelsize: 16
}));


