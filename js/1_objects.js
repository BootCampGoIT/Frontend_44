//! 1. Создание объекта
// const person1 = {
//     firstName: "Alex",
//     lastName: "Ivanov",
//     age: 30,
//     isOnline: true,
//   };

//   const person2 = {
//     firstName: "Nikita",
//     lastName: "Ivanov",
//     age: 25,
//     isOnline: true,
//   };

//   const users = [person1, person2];

//! 2. Доступ к свойствам
// const person = {
//   firstName: "Alex",
//   lastName: "Ivanov",
//   age: 30,
//   isOnline: true,
// };

// console.group(`${person.firstName}'s info:`);
// console.log("firstName:", person.firstName);
// console.log("lastName:", person.lastName);
// console.log("age:", person.age);
// console.groupEnd();

// person1.birthday = "21/03/1990";
// console.log(person1);
// person1.birthday = "22/03/1990";
// console.log(person1);

// console.log(person1.firstName +" "+ person1.lastName);

//   console.log([1,2,3].join(" "));
//! 3. Удаление свойств

// const person = {
//   firstName: "Alex",
//   lastName: "Ivanov",
//   age: 30,
//   isOnline: true,
// };

// delete person.isOnline;

// console.log(person);

//! 4. Отсутствующие свойства
// const person = {
//   firstName: "Alex",
//   lastName: "Ivanov",
//   age: 30,
//   isOnline: true,
// };
// console.log(person);

// person.hasOwnProperty("firstName") &&
//   console.log(person.hasOwnProperty("firstName"));

//! 5. Короткие свойства

// const firstName = "Alex";
// const lastName = "Ivanov";

// const person = {
//   firstName,
//   lastName,
//   age: 30,
//   isOnline: true,
// };

// console.log(person);

//! 6. Вычисляемые свойства
// const firstName = "Alex";
// const lastName = "Ivanov";

// const person = {
//   firstName: "Alex",
//   lastName: "Ivanov",
//   age: 30,
//   isOnline: true,
// };

// const key = prompt("Enter your key");

// console.log(person[key]);

//! 7. Методы объекта

// const sayName = () => {
//   console.log("My name is Alex");
// };


const sayName = function () {
  console.log(this);
};
// sayName()

// const person1 = {
//   firstName: "Alex",
//   lastName: "Ivanov",
//   age: 30,
//   isOnline: true,
//   sayName,
//   //   sayHello() {
//   //     console.log(`Hello. My name is ${this.firstName}`);
//   //   },
// };
// const person2 = {
//   firstName: "Nikita",
//   lastName: "Ivanov",
//   sayName,
// };

// person1.sayName();
// person2.sayName()

// person.sayName();

// person.sayHello();

//! 8. Доступ к объекту через this
