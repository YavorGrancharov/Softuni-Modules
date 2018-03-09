let Person = require('./Person and Teacher.js');

function extendClass(classToExtend) {
    classToExtend.prototype.species = 'Human';
    classToExtend.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    }
}

extendClass(Person);
let newPerson = new Person('Ivan', 'ivan@mail.bg');
console.log(newPerson.species);