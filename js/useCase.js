// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function getResult(callback) {
//   return callback(...numbers); //9
// }

// export default getResult;

// const a = 100;
// const b = 200;
// export default function calculate(callback){
//     return callback(a,b)
// }

export const getMessage = (name) => (message) => {
  console.log(message + " " + name + "!");
};
