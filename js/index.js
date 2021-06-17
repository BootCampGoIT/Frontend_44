// ========= IIFE ===========

// (function () {
//   console.log("Hello");
// })();

// ========= Recursion =============
//  ============ HOMEWORK ===========
// const recurs = (i) => {
//   const max = 100;
//   i += 1;
//   console.log(i);
//   if (i < max) {
//     recurs(i);
//   } else return 1000000;
// };

// const result = recurs(0);
// console.log(result);

// =======================================

// const product = {
//   id: "gdjqghdbmhas53671",
//   name: "Milk",
//   price: 100,
// };

// const qqqqq = {
//   items: [
//     {
//       id: "gdjqghdbmhas53671",
//       name: "Milk",
//       price: 100,
//     },
//     {
//       id: "gdjqghdbmteterthas53671",
//       name: "Bread",
//       price: 105,
//     },
//     {
//       id: "asdasdaadsaadasas",
//       name: "Juice",
//       price: 110,
//     },
//   ],
//   quantity() {
//     return this.items.length;
//   },
//   addItem(item) {
//     this.items.push(item);
//   },
//   deleteItem(id) {
//     //! this.items = this.items.filter((item) => item.id !== id);
//     let index = 0;
//     for (const item of this.items) {
//       index = this.items.indexOf(item);
//       if (item.id === id) break;
//     }
//     console.log(index);
//     this.items.splice(index, 1);
//   },
//   updateItem(itemObject) {
//     for (const item of this.items) {
//       if (item.id === itemObject.id) {
//         item.price = itemObject.price;
//       }
//     }
//   },
// };

// console.log(qqqqq.quantity());

// ============================
// const Hotel = function (name, stars, capacity) {
//   this.name = name;
//   this.stars = stars;
//   this.capacity = capacity;
// };

// const hotel = new Hotel("Resort Hotel", 5, 100);
// console.log(hotel);

// const counter = (init) => (step) => (init += step);

// ===================

// const Counter = function (initValue, step) {
//   this.initValue = initValue;
//   this.step = step;
//   this.add = function () {
//     return (this.initValue += this.step);
//   };
// };

// const counter = new Counter(50, 2);
// console.log(counter.add());
// console.log(counter.add());
// console.log(counter.add());
// console.log(counter.add());
// console.log(counter.add());
// console.log(counter.add());
// const zoom = new Counter(100, 20);

// zoom.decr = function () {
//   return (this.initValue -= this.step);
// };
// console.log(zoom.add());
// console.log(zoom.decr());

// ========================================

// const Hero = function (name, health, hitPower, weapon, speed) {
//   this.name = name;
//   this.health = health;
//   this.hitPower = hitPower;
//   this.weapon = weapon;
//   this.speed = speed;

//   this.hit = function (enemyHealth) {
//     return enemyHealth - this.hitPower * this.speed;
//   };
//   this.modernization = function (value) {
//     this.hitPower += value;
//   };
// };

// const batman = new Hero("Alex", 100, 20, "gun", 0.2);
// const robin = new Hero("Robin", 80, 10, "gun", 2);

// const hit1 = (robin, batman) => {
//   robin.health = batman.hit(robin.health);
//   document.querySelector(".hero2Title").textContent = robin.health;
// };
// const hit2 = (batman, robin) => {
//     batman.health = robin.hit(batman.health);
//     document.querySelector(".hero1Title").textContent = batman.health;
// };

// const btn1 = document.querySelector(".hero1Button");
// const btn2 = document.querySelector(".hero2Button");
// btn1.addEventListener("click", () => hit1(robin, batman));
// btn2.addEventListener("click", () => hit2(batman, robin));

// document.querySelector(".hero1Name").textContent = batman.name;
// document.querySelector(".hero2Name").textContent = robin.name;
// document.querySelector(".hero1Title").textContent = batman.health;
// document.querySelector(".hero2Title").textContent = robin.health;

// // batman.health = robin.hit(batman.health);
// // batman.health = robin.hit(batman.health);
// // robin.health = batman.hit(robin.health);
// // robin.health = batman.hit(robin.health);
// // robin.health = batman.hit(robin.health);
// // robin.health = batman.hit(robin.health);
// // robin.modernization(5);
// // console.log(batman);
// // console.log(robin);
// ==================================================================

// function fn(a, b) {
//   console.log(a + b);
//   // return a + b;
// }
// const x = fn(5,3)

// =======================
// const fn = new Function("a", "b", "console.log(a+b)");
// console.dir(fn.constructor.name);

// const data = {
//   arr: [
//     { name: "Alex", age: 12 },
//     { name: "Nikita", age: 12 },
//   ],
// };

// const getData = () => {
//   const res = { message: "error" };
//   data.arr = res;
// };

// getData();

// const getMarkup = (arr) => {
//   if (arr.constructor.name === "Array") {
//     let result = "";
//     for (const el of arr) {
//       const item = `<li><h3>${el.name}</h3></li>`;
//       result += item;
//     }
//     return result;
//   } else return "";
// };

// document.querySelector(".innerText").innerHTML = getMarkup(data.arr);
// ========================
// const animal = { eats: true };
// const dog = { barks: true, eats: false  };

// dog.__proto__ = animal;

// console.log(dog.barks); // true
// console.log(dog.eats); // false, свойство взято из dog
// console.dir(dog.hasOwnProperty("eats"));

// ==========================
// const animal = {
//   eats: true,
//   getData() {
//     console.log("Hello");
//   },
// };
// const dog = Object.create(animal);
// console.log(dog);
// dog.barks = true;

// const keys = Object.keys(dog);
// console.log(keys);
// console.log(dog.eats);

// const resultArr = [];
// for (const key in dog) {
//   dog.hasOwnProperty(key) && resultArr.push(key);
//   console.log(key); // barks, eats
// }
// console.log(resultArr);

// =============================
// const Guest = function (name, room) {
//   this.name = name;
//   this.room = room;
// };

// Guest.prototype.showGuestInfo = function () {
//   console.log(`name: ${this.name}, room: ${this.room}`);
// };

// const mango = new Guest("Mango", 28);
// const poly = new Guest("Poly", 36);

// mango.showGuestInfo(); // name: Mango, room: 28
// poly.showGuestInfo(); // name: Poly, room: 36

// console.dir(mango.constructor.name);

// ==================================

// const arr = [{ name: "Alex" }, { name: "Nikita" }];
// const newArr = [...arr];
// newArr.push({ name: "Bob" });
// arr.splice(0,1)
// console.log(newArr);
// console.log(arr);
// ===============================
// const Hero = function (name, xp) {
//   this.name = name;
//   this.xp = xp;
// };

// Hero.prototype.gainXp = function (amount) {
//   console.log(`${this.name} gained ${amount} experience points`);
//   this.xp += amount;
// };

// const Warrior = function (name, xp, weapon) {
//   Hero.call(this, name, xp);

//   this.weapon = weapon;
// };

// Warrior.prototype = Object.create(Hero.prototype);
// Warrior.prototype.constructor = Warrior;

// Warrior.prototype.attack = function () {
//   console.log(`${this.name} attacks with ${this.weapon}`);
// };

// const poly = new Warrior("Poly", 200, "sword");
// ========================
// class Guest {
//   constructor(name, roomNumber) {
//     this.name = name;
//     this.roomNumber = roomNumber;
//   }
// }

// const mango = new Guest("Mango", 26);

// console.log(mango); // {name: Mango, roomNumber: 26}
// console.log(mango instanceof Guest); // true
// console.log(mango instanceof Object); // true

// const newStr = new String("dfghj");
// console.dir(newStr);

// ==============
// class Guest {
//   // Аналог функции-конструктора
//   constructor(name, roomNumber) {
//     this.name = name;
//     this.roomNumber = roomNumber;
//   }

//   // Аналог Guest.prototype.getFullInfo
//   getFullInfo() {
//     console.log(`
//       Guest ${this.name}
//       Room number ${this.roomNumber}
//     `);
//   }
// }

// const mango = new Guest();

// console.dir(mango);
// mango.getFullInfo();
// // Guest Mango
// // Room number 26

// ======
// class Guest {
//   constructor(name, roomNumber) {
//     this.name = name;
//     this.roomNumber = roomNumber;
//   }

//   get name_() {
//     return this.name;
//   }

//   set name_(value) {
//     if (value.includes("$")||value.includes("&&")) return
//     this.name = value;
//   }
// }

// const mango = new Guest("Mango", 26);
// mango.name_ = "Alex&&"
// console.log(mango.name);

// ======================
// class Calc {
//   // Класс-калькулятор для двух аргументов
//   constructor() {}

//   // Метод как замена свойству
//   static get PI() {
//     return 3.14;
//   }

//   // Статический метод +
//   static add(...args) {
//     return args.reduce((acc, next) => acc + next, 0);
//   }

//   // Статический метод *
//   static mult(...args) {
//     return args.reduce((acc, next) => acc * next, 1);
//   }
// }

// const arr = [1, 2, 3, 4, 5];

// console.log(Calc.PI); // 3.14
// console.log(Calc.add(...[1, 2, 3, 4, 5])); // 9
// console.log(Calc.mult(12, 3, 4)); // 144

// const calc = new Calc();
// console.dir(Calc);

// ================
// calc.add(1, 2, 3, 4, 5);

// обращение к get и set не требует вызова - т.е. без ()
// console.log(mango.name); // Mango

// console.log(mango.name); // Mango the Fluffy
// mango.name = "Mango the Fluffy";

class Animal {
  constructor(name) {
    this.name = name;
  }

  move() {
    console.log(`I, ${this.name}, am moving!`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    // Вызвать конструктор Animal с аргументом name
    super(name);
  }
  bark() {
    console.log('woof!');
  }
  
  moveAndMakeSound() {
    super.move();
    this.bark();
  
  }
}


const dog = new Dog('Mango', 'shepherd');
console.dir(dog)

// dog.move(); // I, Mango, am moving!
// dog.bark(); // woof!
// dog.moveAndMakeSound(); // I, Mango, am moving! woof!
