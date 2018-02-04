function auto(arr) {
    let cars = new Map();
    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(/\s*\|\s*/);
        let carBrand = tokens[0];
        let carModel = tokens[1];
        let producedCars = Number(tokens[2]);

        if (!cars.has(carBrand)) {
            cars.set(carBrand, new Map());
        }
        if (!cars.get(carBrand).has(carModel)) {
            cars.get(carBrand).set(carModel, 0);
        }
        cars.get(carBrand).set(carModel, cars.get(carBrand).get(carModel) + producedCars);
    }
    for (let [car, models] of cars) {
        console.log(car);
        for (let [model, quantity] of models) {
            console.log(`###${model} -> ${quantity}`);
        }
    }
}

auto(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);