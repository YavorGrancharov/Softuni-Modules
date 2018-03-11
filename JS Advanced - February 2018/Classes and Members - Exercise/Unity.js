class Rat {
    constructor(name) {
        this.name = name;
        this.unitedRats = []
    }

    unite(otherRat) {
        if (otherRat instanceof Rat) {
            this.unitedRats.push(otherRat);
        }
    }

    getRats() {
        return this.unitedRats;
    }

    toString() {
        let newRat = this.name + '\n';
        for (let rat of this.unitedRats) {
            newRat += `##${rat.name}\n`;
        }
        return newRat;
    }
}

let rat1 = new Rat("Gosho");
let rat2 = new Rat('Pesho');

rat1.unite(rat2);

console.log(rat1.toString());