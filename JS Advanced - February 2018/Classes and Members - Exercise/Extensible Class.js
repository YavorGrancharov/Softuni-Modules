(function () {
    let id = 0;

    return class Extensible {
        constructor() {
            this.id++;
        }

        extend(template) {
            for (let property in template) {
                if (template.hasOwnProperty(property)) {
                    if (typeof template[property] === 'function') {
                        Extensible.prototype[property] = template[property];
                    }
                    else {
                        this[property] = template[property];
                    }
                }
            }
        }
    }
})();

let obj1 = new Extensible();
let obj2 = new Extensible();
let obj3 = new Extensible();
console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);