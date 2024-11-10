class Person {
    constructor() {
        this.firstname = ""
        this.lastname = ""
        this.age = 0
 }
}
class Student {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
 }
}
const person1 = new Person();
person1.firstname = "Mari";
person1.lastname = "Maasikas";
person1.age = 21;

const person2 = new Person();
person2.firstname = "Liisa";
person2.lastname = "Lill";
person2.age = 19;

const person3 = new Person();
person3.firstname = "Tiina";
person3.lastname = "Tihane";
person3.age = 22;

const student1 = new Student("Karl", "Kask", 18);

const student2 = new Student("Tom", "Toomingas", 17);

const student3 = new Student("Markus", "Mask", 16);


console.log(person1);
console.log(person2);
console.log(person3);
console.log(student1);
console.log(student2);
console.log(student3);
