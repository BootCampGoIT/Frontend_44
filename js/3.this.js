// https://habr.com/ru/post/464163/

// this — это объект, которому принадлежит метод

// const contora = {
//   driver: "A&D",
//   drive() {
//     console.log(this.driver);
//   },
//   bit() {
//     console.log(this.driver);
//   },
//   wash() {
//     console.log(this.driver);
//   },
//   crush() {
//     console.log(this.driver);
//   },
// };

// const Alex = {
//   driver: "Alex",
// };
// const Bob = {
//   driver: "Bob",
// };
// const Jack = {
//   driver: "Jack",
// };
// const currentDriver = contora.drive.bind(Alex); //now
// const currentDriver1 = contora.crush.bind(Bob); //tomorrow
// const currentDriver2 = contora.drive.bind(Jack); // after tomorrow
// currentDriver()
// currentDriver1()

// const getResult = Math.round(4)
// console.log(this);

// =====================
// const hotel = {
//   hotelName: "Resort Hotel",
//   showThis() {
//     console.log("showThis", this);
//     const self = this
//     function innerFn() {
//       console.log("innerFn", self.hotelName);
//       function newInnerFn() {
//         console.log("innerFn", self.hotelName);
//       }
//       newInnerFn()
//     }
//     innerFn();
//   },
// };
// hotel.showThis();
// ============================
// // Передается ссылка на функцию а нее ее вызов
// fn(hotel.showThis); // window или undefined

// const num = new Number(5);
// const str = new String("dfghjkl");
// const fn = new Function("a", "b", "console.log(this)");
// fn(5, 10);

// console.log(window);
// const data = function (a, b) {};

// ========================

// window.getMessage1 = function () {
//   console.log("hello");
// };
// getMessage1()
// console.log([1, 52, 3, 4, 5, 6].sort((a, b) => a - b));

// petya.showName.bind(alex);

// const alex = petya;
// alex.showName()

// petya.showName();

// const hotel = {
//   name: "Resort hotel",
//   showThis() {
//     const self = this;

//     const fn = () => {
//       function newFn() {
//         console.log("new", self);
//         function newNewFunc() {
//           console.log("fdgchj", self);
//         }
//         newNewFunc();
//       }
//       newFn();
//     };
//     console.dir(fn);

//     fn();
//     console.log("this in showThis: ", this);
//   },
// };

// hotel.showThis();
// ============================
// const func = new Function("a", "b", "console.log(a+b)");
// func(3, 5);

// const createMarkup = (arr) => { //arr = [{name: "acer" }, {name: "apple"}]
//     return (
//         <li>acer</li>
//         <li>apple</li>
//     )
// }

// const obj = {
//   name: "Alex",
// };
// console.log(obj["name"]);

// const getMarkup = (obj) => {
//   Object.getOwnPropertyNames(obj).map((key) => {
//     if (obj[key].constructor.name === "Array") {
//       createMarkup(obj[key]);
//     } else {
//       if (obj[key].constructor.name === "Object") {
//         getMarkup(obj[key]);
//       }
//     }
//   });
// };

// const categories = {
//   laptops: {
//     Acer: {
//       19: {
//         customers: [],
//       },
//       17: {},
//     },
//     Apple: {
//       "MacBook Air": {
//         17: {
//           customers: {},
//         },
//         19: {},
//       },
//       "MacBoo Pro": {
//         17: {
//           customers: {},
//         },
//         19: {},
//       },
//     },
//   },
// };
// const tree = [
//   { category: "Ноутбуки", items: [] },
//   {
//     category: "Смартфоны",
//     items: [
//       {
//         id: 3,
//         name: "Samsung",
//         parent_id: 2,
//       },
//     ],
//   },
// ];

// const dataCategory = [
//   {
//     id: 1,
//     name: "Ноутбуки",
//     parent_id: 0,
//   },
//   {
//     id: 2,
//     name: "Смартфоны",
//     parent_id: 0,
//   },
//   {
//     id: 3,
//     name: "Samsung",
//     parent_id: 1,
//   },
//   {
//     id: 4,
//     name: "Apple",
//     parent_id: 2,
//   },
//   {
//     id: 5,
//     name: "iPhone-XS",
//     parent_id: 4,
//   },
//   {
//     id: 6,
//     name: "iPhone-RX",
//     parent_id: 4,
//   },
// ];

// const res = dataCategory.reduce((acc, item) => {});

// =========== bind ==========
// const fn = function (message, symbol, ...rest) {
//   console.log(`${message} ${this.userName}${symbol}`);
// };
// const fn1 = function (message, symbol, num, ...rest) {
//   console.log(`${message} ${this.userName}${symbol} ${num}`);
// };

// const user = {
//   userName: "Alex",
// };

// const newFn = fn.bind(user, "Hello");
// newFn("!")
// fn.call(user, "Hello", "!");
// fn1.apply(user, ["Hello", "!", 3, 4, 5, 6, 7, 8]);

// document.querySelector(".btn").addEventListener("click", fn.bind(user));

// ==========================
// const user = {
//   userName: "Alex",
//   fn: () => {
//     console.log(this.userName);
//   },
// };

// user.fn();

const hotel = {
  name: "Resort hotel",
  showThis() {
    const fn = () => {
      console.log("fn", this);
    };
    fn();

    console.log("this in showThis: ", this);
  },
};

hotel.showThis();
