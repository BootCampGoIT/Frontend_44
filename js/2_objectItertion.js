//! 1. Цикл for...in
// const person = {
//   firstName: "Alex",
//   lastName: "Ivanov",
//   age: 30,
//   isOnline: true,
//   sayHello() {
//     console.log(`Hello. My name is ${this.firstName}`);
//   },
// };
// // const age = "age"
// // console.log(person["age"]);
// const keys = []

// for (const key in person) {
//   keys.push(key)
// }

// console.log(keys);
// =========================================
// const russian = {
//   title: "russian",
//   error: "Ошибка",
//   message: "Привет",
// };

// const english = {
//   title: "english",
//   error: "Error",
//   message: "Hello",
// };

// const languages = {
//   a: russian,
//   b: english,
// };

// const choice = prompt("Enter your language");

// console.log(languages[choice].error);

//! 2. Object.keys(), Object.values(), Object.entries()
const person = {
  firstName: "Alex",
  lastName: "Ivanov",
  age: 30,
  isOnline: true,
  sayHello() {
    console.log(`Hello. My name is ${this.firstName}`);
  },
};

// const keys = Object.keys(person);
// console.log("keys :>> ", keys);
// -------------
// const keys = [];
// for (const key in person) {
//   keys.push(key);
// }

// console.log("keys :>> ", keys);

// ===========================
// const values = [];
// for (const key in person) {
//   values.push(person[key]);
// }

// console.log("keys :>> ", values);
// console.log("person :>> ", person);

// const values = Object.values(person);
// console.log("values :>> ", values);

// const entries = Object.entries(person);
// console.log("entries :>> ", entries);

// for (const entry of entries) {
//     console.log(entry[0]);
// }

// const entries = [];
// for (const key in person) {
//     entries.push([key, person[key]]);
// }

// console.log('entries :>> ', entries);

// =============

// example

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  //   let result = 0;
  //   for (const product of products) {
  //     product.name === productName &&
  //       console.log(product.price * product.quantity);
  //   }
}

calculateTotalPrice("Radar");
