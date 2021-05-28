// const functionName = function (a, b) {
//   console.log(a + b);
// };

// functionName(5, 4);

// function functionName(a = 0, b = 0) {
//   console.log(a + b);
// }
// functionName();

// const functionName = (a, b) => {
//   console.log(a + b);
// };

// functionName(5, 4);

//! Функциональное выражение (function expression)
// const functionName = function (a, b) {
//   console.log(a + b);
// };

// functionName(5, 4);

//! Порядок выполнения кода

// const func1 = function () {
//   func0();
//   console.log("1");
// };

// const functionName = function () {
//   func1();
//   console.log("2");
// };

// functionName();

// function func0() {
//   console.log("0");
// }

//! Параметры по умолчанию
// function functionName(a = 5, b = 0) {
//   console.log(a + b);
// }
// functionName();

//! Псевдомассив arguments

// const arr = ["A", "B", "C"];

// function getArg(...rest) {
//   console.log( rest);
//   console.log( ["By", ...rest]);
//   return ["By", ...rest];
// }

// getArg("Hello", "A", "B", "C");

// console.dir(getArg);

//! Способы преобразования псевдомассив

//! Паттерн Guard Clause
// const getMinus = (a, b) => {
//   if (a - b > 0) {
//     return a - b;
//   }

//   if (a - b === 0) {
//     return a - b === 0;
//   }

//   return b - a;
// };

// const result = getMinus(10, 10);
// console.log(result);

//! Объявление функции (function declaration)

// ==================================================
// function functionName(value, text = "Hello", ...rest) {
//   console.log(text + " " + value);
//   console.log(rest);
// }
// functionName("Alex!", "By", 312, 312, 213, 213, 213, 132);

// ===========================================
// const getSum = (a,b) => {

// }
