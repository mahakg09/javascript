//objects in  java script are unordered collection of key value pairs
//these key-value pairs are known as properties
//when objects contains functions as their properties....they are refrred to as methods of object
//object creation -- can be done in diffrent ways
//1st is  using object literal

let animals = {
  name: "cat",
  size: "small",
  quantity: 4,
};
console.log(animals);
//2nd is using New kwyword

let person = new Object();
person.Fname = "mayank";
person.age = 22;
person.work = "job";
console.log(person);

//3rd is using object.create() method
//in this---first a prototype object is created
//then new objects are created using that prototype
//then properties can be added on newly created object

let numbers = {};
//let numbers={name:"parul"};
let newnumbers = Object.create(numbers);
newnumbers.fnames = "ABC";
newnumbers.lnames = "ZYZ";
newnumbers.ages = 33;
newnumbers.say = () =>
  //an arrow function is always anonymous
  {
    console.log("you are inside the object");
  };
console.log(newnumbers);
newnumbers.say();

//accessing in this way of creating object
const proto = { role: "admin" };
const user = Object.create(proto);
user.name = "Mahak";
console.log(user.name); // Mahak
console.log(user.role); // admin (inherited from prototype)

//4th is using factory functions
//it can be defined as a function that creates an object and return it
//we can also pass parameters here
function twos() {
  return {
    name: "parul university",
    years: 12,
    grade: "NAAC  A++",
  };
}
let show = twos();
console.log(show);

//5th and last is using constructor functions
//here we dont use return keyword to return an object
//name of constructor function should be written in Pascal Notation
//we can also pass parameters here
//in js a constructor gets called when a object is created

function GreetMe() {
  (this.say = "heelo guys"), (this.times = 2);
}
let p = new GreetMe();
console.log(p);

//adding and deleting in objects
let classes = {
  name: "7A1",
  "number of students": 70,
  fr: "mr.charan",
};
console.log(classes);

//addition
classes.cr = "mr.ABCDS";
classes.average = 80;
console.log(classes);

//deletion can be done using delet keyword easily
delete classes.cr;
console.log(classes);

//modificatiom
classes.fr = "mrs.siya rastogi";
console.log(classes);

//accesing object properties in js
//can be done in 2 ways
//using 1-Dot
// and  2-bracket
//we can not use dot notation when property name or method of an object conatins special charcters,spaces,or starts with a number
let myintro = {
  name: "mahak",
  age: 22,
  class: "7A1",
  "1hobby": "study",
};
console.log(myintro.name);
//console.log(myintro["1hobby"] this will lead to error
console.log(myintro["1hobby"]);

//These are built-in methods to get object data easily.
let student = { name: "Mahak", age: 22, grade: "A" };

console.log(Object.keys(student)); // ['name', 'age', 'grade']
console.log(Object.values(student)); // ['Mahak', 22, 'A']
console.log(Object.entries(student)); // [['name', 'Mahak'], ['age', 22], ['grade', 'A']]

//object spreading and cloning
//You can copy or merge objects easily using the spread operator (...)
let obj1 = { a: 1, b: 3 };
const obj2 = { c: 9 };
const merge = { ...obj1, ...obj2 };
console.log(merge);
const clone = { ...obj1 };
console.log(clone);
//console.log(...obj2);--will not work directly

//freezing
//Object.freeze()--prevents any changes in object properties
let obj3 = {
  a1: 11,
  a2: 22,
};
console.log(obj3);
obj3.a1 = 999;
console.log(obj3);
Object.freeze(obj3);
obj3.a1 = 1001; //no affect because it is freezed now
console.log(obj3);

//sealing
//Object.seal()--allows changes,but not adding /removing keys
const obj4 = {
  a: 111,
  b: 222,
  c: 333,
};
console.log(obj4);
obj4.a = 777;
console.log(obj4);
obj4.d = 444;
console.log(obj4);
delete obj4.b;
console.log(obj4);
Object.seal(obj4);
obj4.a = 10001;
console.log(obj4);
obj4.b = 22222; //wont work
console.log(obj4); //wont work
delete obj4.c; //wont work
console.log(obj4); //wont work

//nested objects
//objects can conatin other objects
const student1 = {
  name: "Mahak",
  marks: { math: 95, science: 88 },
};
console.log(student1);

console.log(student1.marks.math);
console.log(student1.marks.science);
