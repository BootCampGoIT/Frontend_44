// import getResult from "./useCase.js";

// import calculate from "./useCase.js";

// import calculate from "./useCase";

// const result = getResult(Math.max);
// console.log(result);

// const sum = (x, y) => x + y;
// const min = (x, y) => x - y;
// const dev = (x, y) => x / y;
// const mult = (x, y) => x * y;

// const result = calculate(sum);
// console.log(result);
// function getName (){
//     return function (name){
//         console.log(name);
//     }
// }

// const myResult = getName();
// myResult("Alex")

// const getName = () => {
//   return (name) => {
//     console.log(name);
//   };
// };

// getName()("Alex");

function getResult() {
  return function (a) {
    return function (b) {
      return function (c) {
        console.log(c + b + a);
      };
    };
  };
}

const data = getResult()(1)(2);
data(8)
// ===========================
// import { getMessage } from "./useCase.js";

// const data = {
//   name: "Alex",
//   age: 20,
// };
// const getData = getMessage(data.name);

// const message = prompt("Enter word!");

// getData(message);

// ==============================
// const repeat = function (n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// };

// const labels = [];

// repeat(5, (value) => {
//   labels.push(`Label ${value + 1}`);
// });

// console.log(labels); // ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"]

// =================================
// const labels = ["Label 1", "Label 4", "Label 2", "Label 3", "Label 5"];

// const res = [];

// for (const label of labels) {
//   const arr = label.split(" ");
//   if (arr[1] > 3) {
//     res.push(label);
//   }
// }
// console.log(res);
// ---------------------
// const result = labels.filter((label) => label.split(" ")[1] > 3);
// console.log(result);

// =============================

// const bar = function () {
//   console.log("bar");
// };

// const baz = function () {
//   console.log("baz");
// };

// const foo = function () {
//   console.log("foo");
//   bar();
//   baz();
// };

// foo();

// =========================
// lexical environment
// ===========================

// const getData = () => {
//     const a = 5;
//     return function(){
//         console.log(a);
//     }
// }
// const res = getData();
// res();

// ====================================

//! const counter = (initialValue) => (step) => (initialValue += step);

// const counter = (initialValue) => {
//   return function (step) {
//     return (initialValue += step);
//   };
// };

// const volume = counter(0);
// console.log(volume(1));
// console.log(volume(5));
// console.log(volume(6));
// console.log(volume(9));
// console.log("==================");

// const zoom = counter(100);
// console.log(zoom(10));
// console.log(zoom(10));
// console.log(zoom(-10));
// console.log(zoom(-10));
