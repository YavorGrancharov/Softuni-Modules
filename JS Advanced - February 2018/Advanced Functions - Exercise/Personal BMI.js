let BMI = (function () {
    return function input(name, age, weight, height) {
        let index = Math.round(Number(weight) / Number(Math.pow((height / 100), 2)));
        let info = {
            name: name,
            personalInfo: {
                age: age,
                weight: weight,
                height: height
            },
            BMI: Number(index),
        };

        let status = '';
        if (index < 18.5) {
            info.status = 'underweight';
        }
        else if (index >= 18.5 && index < 25) {
            info.status = 'normal';
        }
        else if (index >= 25 && index < 30) {
            info.status = 'overweight';
        }
        else {
            info.status = 'obese';
            info.recommendation = 'admission required'
        }

        return info;
    }
})();
console.log(BMI('Peter', 38, 80, 157));
