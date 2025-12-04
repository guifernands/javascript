// Constructor -> mold (class)
function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    // default but descrease performance because all of the persons ll have the function
    // this.fullName = () => 'ORIGINAL ',this.name + ' ' + this.surname;
}

// Person.prototype === person1.__proto__; -> true

// improves performance by adding the function to the prototype
Person.prototype.fullName = () => this.nome + ' ' + this.sobrenome;

// instace
const person1 = new Person('Gui', 'O.'); // <- Person = Constructor Function
const person2 = new Person('Fernanda', 'A.'); // <- Person = Constructor Function

console.dir(person1);
console.dir(person2);

// person1 -> Person.prototype -> Object.prototype