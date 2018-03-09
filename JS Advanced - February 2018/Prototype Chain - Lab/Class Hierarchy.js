function hierarchy() {
    class Figure {
        constructor() {
            if (new.target === Figure) {
                throw new TypeError('Figure class is abstract!')
            }
        }

        toString() {
            return this.constructor.name;
        }
    }

    class Circle extends Figure {
        constructor(radius) {
            super();
            this.radius = radius;
        }

        get area() {
            return Math.PI * Math.pow(this.radius, 2);
        }

        toString() {
            return `${this.constructor.name} - radius: ${this.radius}`
        }
    }

    class Rectangle extends Figure {
        constructor(width, height) {
            super();
            this.width = width;
            this.height = height;
        }

        get area() {
            return this.width * this.height;
        }

        toString() {
            return `${this.constructor.name} - width: ${this.width}, height: ${this.height}`
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }
}

let obj = hierarchy();
let Circle = obj.Circle;
let newCircle = new Circle(5);
console.log(newCircle.area);
console.log(newCircle.toString());