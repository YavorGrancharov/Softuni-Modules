function filter(minAge, nameA, ageA, nameB, ageB) {
    let personA = {name:nameA,age:ageA};
    let personB = {name:nameB,age:ageB};
    if (personA.age >= minAge) {
        console.log(`{ name: \'${nameA}\', age: ${ageA} }`);
    }
    if (personB.age >= minAge) {
        console.log(`{ name: \'${nameB}\', age: ${ageB} }`);
    }
}
filter(12, 'Ivan', 15, 'Asen', 9);