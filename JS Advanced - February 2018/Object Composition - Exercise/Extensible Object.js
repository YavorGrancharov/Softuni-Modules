function extended(template) {
    let obj = {
        extend: (template) => {
            for (let property in template) {
                if (typeof template[property] === 'function') {
                    Object.getPrototypeOf(obj)[property] = template[property];
                }
                else {
                    obj[property] = template[property];
                }
            }
        }
    };
    return obj;
}
let ext = extended();
ext.extend({
    extensionMethod: function () {
        return 'something'
    },
    extensionProperty: 'someString'
});

console.log(ext);