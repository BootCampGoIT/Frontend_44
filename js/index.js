// [].method(callback[(currentValue, index, array)]);

// const callBack = (item) => ({ value: item });

// [1, 2, 3, 4, 5].map(callBack);

// ==============================
//! ex1.
// const arr = [
//   { name: "Alex", data: { start: "12.12.2020", finish: "22.06.2021" } },
//   { name: "Nikita", data: { start: "12.1.2020", finish: "22.3.2021" } },
//   { name: "Jake", data: { start: "12.2.2020", finish: "22.4.2021" } },
//   { name: "Bob", data: { start: "12.3.2020", finish: "22.5.2021" } },
// ];

// const newArr = [];
// for (let i = 0; i < arr.length; i += 1) {
//   const keys = Object.keys(arr[i]);

//   const deepCloneFunction = (value = keys) => {
//     for (let i = 0; i < keys.length; i += 1) {
//       if (keys[i].constructor.name === "Object") {
//         deepCloneFunction(Object.keys(keys[i]));
//       } else newArr[i] = { [keys[i]]: arr[keys[i]] };
//     }
//   };
//   deepCloneFunction();
// }
// console.log("newArr :>> ", newArr);

// =============== forEach ==============

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// numbers.forEach((item, index) => (numbers[index] = item + 1));
// console.log("numbers :>> ", numbers);

// =============== forEach ============
// const arr = [
//   { name: "Alex", data: { start: "12.12.2020", finish: "22.06.2021" } },
//   { name: "Nikita", data: { start: "12.1.2020", finish: "22.3.2021" } },
//   { name: "Jake", data: { start: "12.2.2020", finish: "22.4.2021" } },
//   { name: "Bob", data: { start: "12.3.2020", finish: "22.5.2021" } },
// ];
// arr.forEach((item) => (item.data.start = "0000000000000"));

// console.log('arr :>> ', arr);

// ====================== map =====================

// const users = [
//   { name: "Alex", data: { start: "12.12.2020", finish: "22.06.2021" } },
//   { name: "Nikita", data: { start: "12.1.2020", finish: "22.3.2021" } },
//   { name: "Jake", data: { start: "12.2.2020", finish: "22.4.2021" } },
//   { name: "Bob", data: { start: "12.3.2020", finish: "22.5.2021" } },
// ];

// const res = users.map(({ data: { finish } }) => finish);

// console.log("res :>> ", res);

// =====

// const newUsers = users.map((user) => ({
//   ...user,
//   status: { prev: "offline", current: "online" },
// }));

// <li>Alex</li>
// <li>Nikita</li>
// <li>NikJakeita</li>
// <li>Jake</li>

// const markup = users.map((user) => `<li>${user.name}</li>`).join("");
// console.log("markup :>> ", markup);

// =============== filter ==================
// const state = {
//   cart: [],
//   products: [],
//   users: [
//     {
//       id: "1",
//       name: "Alex",
//       data: { start: "12.12.2020", finish: "22.06.2021" },
//       status: "onLine",
//     },
//     {
//       id: "2",
//       name: "Nikita",
//       data: { start: "12.1.2020", finish: "22.3.2021" },
//       status: "offLine",
//     },
//     {
//       id: "3",
//       name: "Jake",
//       data: { start: "12.2.2020", finish: "22.4.2021" },
//       status: "onLine",
//     },
//     {
//       id: "4",
//       name: "Bob",
//       data: { start: "12.3.2020", finish: "22.5.2021" },
//       status: "offLine",
//     },
//   ],
// };

// const removeUser = (delID) => {
//   state.users = state.users.filter(({ id }) => id !== delID);
// };
// removeUser("3")
// console.log('state :>> ', state);

// // const res = users.filter(({ status }) => status === "onLine");
// // console.log("res :>> ", res);

// =========================
// const state = {
//   cart: [],
//   products: [],
//   users: [
//     {
//       id: "1",
//       name: "Alex",
//       data: { start: "12.12.2020", finish: "22.06.2021" },
//       status: "onLine",
//       likes: 1000,
//     },
//     {
//       id: "2",
//       name: "Nikita",
//       data: { start: "12.1.2020", finish: "22.3.2021" },
//       status: "offLine",
//       likes: 100,
//     },
//     {
//       id: "3",
//       name: "Jake",
//       data: { start: "12.2.2020", finish: "22.4.2021" },
//       status: "onLine",
//       likes: 10,
//     },
//     {
//       id: "4",
//       name: "Bob",
//       data: { start: "12.3.2020", finish: "22.5.2021" },
//       status: "offLine",
//       likes: 1,
//     },
//     {
//       id: "5",
//       name: "Jake",
//       data: { start: "12.3.2020", finish: "22.4.2021" },
//       status: "onLine",
//     },
//   ],
// };
// const res = state.users
//   .map(({ data: { start } }) => start)
//   .filter((start) => start === "12.3.2020");
// console.log("res :>> ", res);

// const res1 = state.users.reduce((acc, { status, name }) => {
//   if (status === "onLine") {
//     acc.push({ name, status });
//   }
//   return acc;
// }, []);
// console.log("res :>> ", res);

// const res = state.users.reduce((acc, user) => {
//   return acc += user.likes || 0;

// }, 0);

// console.log("res :>> ", res);

// const res = state.users.find(({ name, id }) => name === "Jake" && id === "5");
// console.log("res :>> ", res);

// const res = state.users.some(({ name }) => name === "Jake");
// console.log('res :>> ', res);

// const res1 = state.users.every(({ name }) => name == "Jake");
// console.log('res :>> ', res1);
// =================
// const res = [];
// const getCommonElements = (arr1, arr2) => {
//   arr1.forEach((element) => arr2.includes(element) && res.push(element));
// };

// getCommonElements();
// console.log("res :>> ", res);
// ===========

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 4, 8, 3];
const res = [...arr1, ...arr2];

const set = [...new Set(res)];
console.log("set :>> ", set);

// console.log("res :>> ", res);


// ===================
const users = [
  { name: 'Mango', daysActive: 15 },
  { name: 'Poly', daysActive: 4 },
  { name: 'Ajax', daysActive: 27 },
  { name: 'Chelsey', daysActive: 2 },
];

// const sortByActiveDays = (a, b) => a.daysActive - b.daysActive;

console.log(users.sort((a, b) => a.daysActive - b.daysActive));

