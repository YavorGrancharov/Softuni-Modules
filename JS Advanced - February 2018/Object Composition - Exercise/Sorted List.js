function sorted() {
    let array = [];

    let obj = {
        add: function add(element) {
            array.push(element);
            array.sort((a, b) => a - b);
            this.size++;
        },
        remove: function remove(index) {
            if (index >= 0 && index < array.length) {
                array.splice(index, 1);
                this.size--;
            }
        },
        get: function get(index) {
            if (index >= 0 && index < array.length) {
                return array[index]
            }
        },
        size: 0
    };
    return obj
}

let result = sorted();

result.add('5');
result.get('0');
result.add('3');
result.get('0');
result.remove(0);
result.get('0');
console.log(result.size);