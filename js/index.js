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

const Hero = function (name, health, hitPower, weapon, speed) {
  this.name = name;
  this.health = health;
  this.hitPower = hitPower;
  this.weapon = weapon;
  this.speed = speed;

  this.hit = function (enemyHealth) {
    return enemyHealth - this.hitPower * this.speed;
  };
  this.modernization = function (value) {
    this.hitPower += value;
  };
};

const batman = new Hero("Alex", 100, 20, "gun", 0.2);
const robin = new Hero("Robin", 80, 10, "gun", 2);

const hit1 = (robin, batman) => {
  robin.health = batman.hit(robin.health);
  document.querySelector(".hero2Title").textContent = robin.health;
};
const hit2 = (batman, robin) => {
    batman.health = robin.hit(batman.health);
    document.querySelector(".hero1Title").textContent = batman.health;
};

const btn1 = document.querySelector(".hero1Button");
const btn2 = document.querySelector(".hero2Button");
btn1.addEventListener("click", () => hit1(robin, batman));
btn2.addEventListener("click", () => hit2(batman, robin));

document.querySelector(".hero1Name").textContent = batman.name;
document.querySelector(".hero2Name").textContent = robin.name;
document.querySelector(".hero1Title").textContent = batman.health;
document.querySelector(".hero2Title").textContent = robin.health;

// batman.health = robin.hit(batman.health);
// batman.health = robin.hit(batman.health);
// robin.health = batman.hit(robin.health);
// robin.health = batman.hit(robin.health);
// robin.health = batman.hit(robin.health);
// robin.health = batman.hit(robin.health);
// robin.modernization(5);
// console.log(batman);
// console.log(robin);
