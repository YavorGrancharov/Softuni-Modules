function heroic(arr) {
    let hero = {};
    let heroData = [];
    for (let i = 0; i < arr.length; i++) {
        let heroes = arr[i].split(/\s\/\s/);
        let heroName = heroes[0];
        let heroLevel = heroes[1];
        let items = [];

        if (heroes.length > 2) {
            items = heroes[2].split(/,\s/);
        }

        hero = {
            name: heroName,
            level: Number(heroLevel),
            items: items
        };
        heroData.push(hero);
    }
    console.log(JSON.stringify(heroData));
}

heroic(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);