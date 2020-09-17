/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

// const PersonOne = new Person ({
//   name: 'Jonathan',
//   age: 21,
// });
// const PersonTwo = new Person ({
//   name: 'Halie',
//   age: 16,
// });
// const PersonThree = new Person  ({
//   name: 'Tachi',
//   age: 1,
// });

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.stomach= [];
// }
// Person.prototype.eat=function(edible){
//   if (this.stomach.length(10)){
//     this.stomach.push(edible);
//   }
// }
// Person.prototype.poop = function (){
//   this.stomach = [];
// }
// Person.prototype.toString=function(){
//   return `${this.name}, ${this.age}`
// }
// console.log(PersonOne.toString());
// console.log(PersonTwo.toString());
// console.log(PersonThree.toString());

// PersonOne.eat()



/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.

*/

function Car(model, milesPerGallon) {
this.model = model;
this.milesPerGallon = milesPerGallon;
}

let tank = new Car('Nissan');

let odometer = new Car('Nissan');


/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, toy, action) {
this.name = name;
this.age = age;
this.toy = toy;
this.action= action;

}

const Person = new Baby({
name: 'Tomas',
age:  5,
toy: 'ball'
});

const PersonTwo = new Baby ({
  name: 'Lily',
  age: 6,
  toy: 'Doll'
});

Baby.prototype.favoriteToy = function (){
console.log(`${this.name} is ${this.age} months old `)
}

Baby.prototype.play = function (){
  console.log(`is playing with ${this.toy} `)
  }

/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. can create this
  2. can call things
  3. can bind  things
  4. can print?
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
