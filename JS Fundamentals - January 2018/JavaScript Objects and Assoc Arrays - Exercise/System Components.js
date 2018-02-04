function system(arr) {
    let components = new Map();
    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(/\s*\|\s*/);
        let systemName = tokens[0];
        let component = tokens[1];
        let subComponent = tokens[2];

        if (!components.has(systemName)) {
            components.set(systemName, new Map());
        }
        if (!components.get(systemName).has(component)) {
            components.get(systemName).set(component, []);
        }
        components.get(systemName).get(component).push(subComponent);
    }

    let sortedSystem = Array.from(components.keys()).sort(function (a,b) {
        return components.get(b).size - components.get(a).size;
    });

    for (let system of sortedSystem) {
        console.log(system);
        let sortedItems = Array.from(components.get(system).keys()).sort(function (a, b) {
            return components.get(system).get(b).length - components.get(system).get(a).length;
        });
        for (let item of sortedItems) {
            console.log(`|||${item}`);
            components.get(system).get(item).forEach(sc => console.log(`||||||${sc}`));
        }
    }
}

system(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']);