// Constructor -> mold (class)
function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    this.fullName = () => this.name + ' ' + this.surname;
}

// instace
const person1 = new Person('Gui', 'O.'); // <- Person = Constructor Function
const person2 = new Person('Fernanda', 'A.'); // <- Person = Constructor Function

console.dir(person1);
console.dir(person2);