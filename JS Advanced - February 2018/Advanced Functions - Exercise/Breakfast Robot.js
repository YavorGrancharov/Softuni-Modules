let solution = (function () {
    let stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let foods = {
        apple: {
            protein: 0,
            carbohydrate: 1,
            fat: 0,
            flavour: 2
        },
        coke: {
            protein: 0,
            carbohydrate: 10,
            fat: 0,
            flavour: 20
        },
        burger: {
            protein: 0,
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        omelet: {
            protein: 5,
            carbohydrate: 0,
            fat: 1,
            flavour: 1
        },
        cheverme: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    };
    return function cook(input) {
        let tokens = input.split(/\s+/);
        let command = tokens[0];

        switch (command) {
            case 'restock':
                let ingredient = tokens[1];
                let quantity = Number(tokens[2]);
                stock[ingredient] += quantity;
                return 'Success';
                break;
            case 'prepare':
                let meal= tokens[1];
                let mealQuantity = Number(tokens[2]);

                let enoughProtein = available(stock.protein, foods[meal].protein, mealQuantity);
                let enoughCarbs = available(stock.carbohydrate, foods[meal].carbohydrate, mealQuantity);
                let enoughFat = available(stock.fat, foods[meal].fat, mealQuantity);
                let enoughFlavour = available(stock.flavour, foods[meal].flavour, mealQuantity);

                let inStock = [{
                    protein: enoughProtein,
                    carbohydrate: enoughCarbs,
                    fat: enoughFat,
                    flavour: enoughFlavour
                }];

                if (enoughProtein && enoughCarbs && enoughFat && enoughFlavour) {
                    stock.protein -= foods[meal].protein * mealQuantity;
                    stock.carbohydrate -= foods[meal].carbohydrate * mealQuantity;
                    stock.fat -= foods[meal].fat * mealQuantity;
                    stock.flavour -= foods[meal].flavour * mealQuantity;
                    return 'Success';
                }
                else {
                    for (let makros of inStock) {
                        if (makros.protein === false) {
                            return 'Error: not enough protein in stock';
                        }
                        if (makros.carbohydrate === false) {
                            return 'Error: not enough carbohydrate in stock';
                        }
                        if (makros.fat === false) {
                            return 'Error: not enough fat in stock';
                        }
                        if (makros.flavour === false) {
                            return 'Error: not enough flavour in stock';
                        }
                    }
                }
                break;
            case 'report':
                return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`;
                break;
            default:
                break;
        }
        function available(stockIngredient, mealIngredient, mealQuantity) {
            if (stockIngredient < mealIngredient * mealQuantity) {
                return false;
            }
            return true;
        }
    }
})();

console.log(solution("restock carbohydrate 10"));

console.log(solution("restock flavour 10"));

console.log(solution("prepare apple 1"));

console.log(solution("restock fat 10"));

console.log(solution("prepare burger 1"));

console.log(solution("report"));