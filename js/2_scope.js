//!  Область видимости

//!  Область видимости функции

// const a = 5;

// const getNum =() => {
//     a = 10 + 5
// }

// getNum()

// console.log(a);

//!  Hoisting

// ================================

let a = 0;

const getNum = (b) => {
  const c = 100;
  const str = "Hello";
  return a + b;
};

// const scope = {
//     global: {
//         variables: {
//             a,
//             getNum : {
//                 variables: {
//                     c: 100,
//                     str: "Hello",
//                     b: undefined
//                 }
//             }
//         }
//     }
// };
