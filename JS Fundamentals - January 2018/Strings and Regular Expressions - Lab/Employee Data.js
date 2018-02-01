function employeeData(arr) {
    let data = /^([A-Z][a-zA-Z]*)\s-\s([1-9][0-9]*)\s-\s([a-zA-Z0-9 -]+)$/;
    let matches = [];
    for (let obj of arr) {
        let match = data.exec(obj);
        if (match) {
            console.log(`Name: ${match[1]}\nPosition: ${match[3]}\nSalary: ${match[2]} `);
        }
    }
}
employeeData(['Isacc - 1000 - CEO','Ivan - 500 - Employee','Peter - 500 - Employee']);