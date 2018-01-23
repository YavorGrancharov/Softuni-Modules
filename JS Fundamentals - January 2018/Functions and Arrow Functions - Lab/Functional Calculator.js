function calc(leftOperand, rightOperand, operator) {
    let multiply = function (leftOperand, rightOperand) {
        return leftOperand * rightOperand;
    };
    let divide = function (leftOperand, rightOperand) {
        return leftOperand / rightOperand;
    };
    let add = function (leftOperand, rightOperand) {
        return leftOperand + rightOperand;
    };
    let subtract = function (leftOperand, rightOperand) {
        return leftOperand - rightOperand;
    };
    switch (operator) {
        case '*':
            return multiply(leftOperand, rightOperand);
            break;
        case '/':
            return divide(leftOperand, rightOperand);
            break;
        case '-':
            return subtract(leftOperand, rightOperand);
            break;
        case '+':
            return add(leftOperand, rightOperand);
            break;
    }
}
console.log(calc(2, 4, '+'));