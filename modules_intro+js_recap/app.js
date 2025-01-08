var greet = require('./greet');
greet.english();
greet.spanish();

var person = {
    firstname: 'John',
    lastname: 'Doe',
    greet: function() {
        console.log('Hi '+ this.firstname + ' ' + this.lastname);
    }
};

person.greet();
console.log(person['firstname']);

function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
};

Person.prototype.greet = function() {
    console.log('Hi '+ this.firstname + ' ' + this.lastname);
};

var john = new Person('John', 'Doe');
console.log(john.firstname);
john.greet();

var jane = new Person('Jane', 'Doe');
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);

//pass by value
function change(b) {
    b = 2;
}

var a = 1;
change(a);
console.log(a);

//pass by reference
function changeObj(d) {
    d.prop1 = function() {};
    d.prop2 = {};
};

var c = {};
c.prop1 = {};
changeObj(c);
console.log(c);

//immediately invoked function expression
(function (lastname) {
    var firstname = 'john';
    console.log(firstname);
    console.log(lastname);
}('doe'));
var firstname = 'jane';
console.log(firstname);