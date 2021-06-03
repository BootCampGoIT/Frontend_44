// ===========

// =============

// // const users = ["Alex", "Andrii", "Nikita"];

// const person1 = {
//   firstName: "Alex",
//   lastName: "Ivanov",
//   age: 30,
//   isOnline: true,
// };

// const person2 = {
//   firstName: "Nikita",
//   lastName: "Ivanov",
//   age: 25,
//   isOnline: true,
// };

// const users = [person1, person2];

// // const getSum = (1,2, ...rest) => {

// // }
// // getSum(1,2,3,4,5,6,7,8,9,0,10)

//! ===================?
// const user = {
//   id: "dfhg312312312123jhkj",
//   status: "Student",
//   camp: "44",
//   fullInfo: {
//     firstName: "Ivanov",
//     lastName: "Alex",
//     friends: {
//       bestFriends: ["Vasya", "Petya"],
//       blackList: ["Andrii"],
//     },
//   },
// };

// console.log(user.fullInfo?.friends?.blackList?.[0]);

// ===============================

// const arr = [1, 2, 3, 4, 5, 6, 7];
// const newArr = [...arr];

// const users = [
//   { name: "Alex", age: 10 },
//   { name: "Nikita", age: 20 },
// ];

// const persons = [...users, { name: "Andrii", age: 35 }];

// console.log(users);
// console.log(persons);

// persons[0].name = "Vova";
// persons[2].name = "Roman";
// =============================

// const user = { name: "Alex", age: 30 };
// // const persons = [user , { name: "Andrii", age: 35 }];
// const persons = [{ ...user }, { name: "Andrii", age: 35 }];
// persons[0].name = "Vasya";

// console.log(user);
// ======================================

// const user = {
//   name: "Bob",
//   age: 30,
//   fullInfo: {
//     birthday: "12/07/1991",
//   },
// };

// const getInfo = ({ fullInfo: { birthday } }) => {
//   console.log(birthday);
// };

// const getAge = ({ age }) => {
//   console.log(age);
// };

// getInfo(user);
// getAge(user);
