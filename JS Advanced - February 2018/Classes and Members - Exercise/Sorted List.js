class SortedList {
    constructor() {
        this.array = [];
        this.size = 0;
    }

    add(element) {
        this.array.push(element);
        this.size++;
        this.array.sort((a, b) => {
            return a - b;
        });

    }

    remove(index) {
        if (index >= 0 && index < this.array.length) {
            this.array.splice(index, 1);
            this.size--;
        }
    }

    get(index) {
        if (index >= 0 && index < this.array.length) {
            return this.array[index]
        }
    }
}


let obj = new SortedList();
obj.add(2);
obj.add(3);
obj.add(1);
obj.add(4);

console.log(Object.__proto__.valueOf(obj));

console.log(Object.prototype.valueOf(obj));