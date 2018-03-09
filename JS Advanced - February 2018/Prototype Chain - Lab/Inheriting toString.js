function toStringExtension() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
        toString() {
            let className = this.constructor.name;
            return `${className} (name: ${this.name}, email: ${this.email})`;
        }
    }
    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
        toString() {
            let className = this.constructor.name;
            return `${className} (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`;
            /*alternative variant ->
            * let parent = super.toString().slice(0, -1);
            * return parent + `, subject: ${this.subject})`*/


        }
    }
    class Student extends Person{
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }
        toString() {
            let className = this.constructor.name;
            return `${className} (name: ${this.name}, email: ${this.email}, course: ${this.course})`
            /*alternative variant ->
            * let parent = super.toString().slice(0, -1);
            * return parent + `, course: ${this.course})`*/
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}

let obj = toStringExtension();
let Person = obj.Person;
let newPerson = new Person('Pesho', 'p@abv.bg');
console.log(newPerson.toString());

let obj2 = toStringExtension();
let Teacher = obj.Teacher;
let newTeacher = new Teacher('Pesho', 'p@abv.bg', 'JS');
console.log(newTeacher.toString());

let obj3 = toStringExtension();
let Student = obj.Student;
let newStudent = new Student('Pesho', 'p@abv.bg', 'JS');
console.log(newStudent.toString());
