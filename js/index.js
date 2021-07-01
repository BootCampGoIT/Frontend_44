// ==========================================================================================================
//################## Строки #################################################################################
// ==========================================================================================================

// Напишите функцию delete_characters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.

// Решение:
// const str =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, laboriosam.";
// const delete_characters = (str, length) => {
//   console.log(str.slice(0, length));
// };

// delete_characters(str, 20);
// // ======================================================

// Напишите функцию insert_dash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр

// Решение:
// const str =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit Soluta laboriosam";
// const insert_dash = (str) => {
//   return str.split(" ").join("-").toUpperCase();
// };
// console.log(insert_dash(str));
// // ======================================================
// Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний.

// Решение:
// const str =
//   "lorem ipsum dolor sit amet consectetur adipisicing elit Soluta laboriosam";
// const getRes=(str)=> {
//     return str[0].toUpperCase() + str.slice(1)
// }
// console.log(getRes(str))
// // ======================================================
// Напишите функцию remove_char(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.

// const str = "every., -/ hunter #! wishes ;: {} to $ % ^ & * know";

// // Решение:
// const badCharacters = [
//   ",",
//   ".",
//   "-",
//   "/",
//   "#",
//   "!",
//   ":",
//   ";",
//   "{",
//   "}",
//   "$",
//   "%",
//   "^",
//   "&",
//   "*",
// ];
// const remove_char = (str) => {
//   const result = [];
//   str.split("").reduce((acc, item) => {
//     if (acc !== item) {
//       result[result.length - 1] !== item &&
//         !badCharacters.includes(item) &&
//         result.push(item);
//     }
//     acc = item;
//     return acc;
//   }, "");
//   return result.join("");
// };
// console.log(remove_char(str));

// // ======================================================
// Напишите функцию insensitive_search(str1, str2), которая осуществляет поиск подстроки str2 в строке str1 без учёта регистра символов.

// Решение:
// // ======================================================
// Напишите функцию initCap(str), которая преобразует стиль написания составных слов строки в CamelCase, при котором несколько слов пишутся слитно без пробелов, при этом каждое слово внутри строки пишется с заглавной буквы.

// Решение:
// // ======================================================
// Напишите функцию path(pathname), которая вовращает имя файла (подстрока после последнего символа "\" ) из полного пути к файлу.
// const pathname = "/home/user/dir/file.txt";

// Решение:
// // ======================================================
// Напишите функцию limitStr(str, n, symb), которая обрезает строку, если она длиннее указанного количества символов n. Усеченная строка должна заканчиваться троеточием «...» (если не задан параметр symb) или заданным символом symb.

// Решение:
// // ======================================================
// Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.
// const str = "    Max is a good      boy     ";
// Решение:
// // ======================================================
// Напишите функцию removeDuplicate(str), которая возвращает строку, очищенную от слов-дупликатов, т.е. каждое слово должно повторяться не более одного раза.
// const str = "вишня, груша, слива, груша";

// ==========================================================================================================
//################## Массивы #################################################################################
// ==========================================================================================================

// Напишите функцию removeDuplicates(arr), которая возвращает массив, в котором удалены повторяющиеся элементы из массива arr (игнорируйте чувствительность к регистру).
// const arr = ["php", "php", "css", "css",
// "script", "script", "html", "html", "java"
// ];
// Решение:
// // ======================================================
// Напишите код, который создаёт массив элементов представляющих собой сумму соответствующих элементов заданных массивов.

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [4, 5, 6];
// Результат: [5,7,9,4,5]

// Решение:

// // ======================================================
// Напишите функцию countIdentic(arr), которая возвращает количество повторяющихся элементов в массиве.
// const arr = [3, 3, 7, 7, 3, 3, 4, 5, 5, 8, 8, 8]

// Решение:
// // ======================================================
// Напишите код, который находит наиболее часто используемый элемент массива.

// Решение:
// // ======================================================
// Напишите функцию generateRange(start, end), которая генерирует массив заданной длины len, заполненный целыми числами. Каждое последующее число в массиве должно быть больше предыдущего на единицу.

// Решение:
// // ======================================================

// ==========================================================================================================
//################## Функции #################################################################################
// ==========================================================================================================
// Напишите функцию JavaScript, которая переворачивает число.

// Решение:
// // ======================================================
// Вернуть переданную строку с буквами в алфавитном порядке

// Решение:
// // ======================================================
// Напишите функцию find_longest_word(str), которая принимает строку в качестве параметра и находит самое длинное слово в строке.

// Решение:
// // ======================================================
// Напишите функцию detect_data_type(value), которая принимает аргумент и возвращает тип.

// Решение:
// // ======================================================
// Напишите функцию JavaScript, которая возвращает элементы массива, которые больше указанного числа.

// Решение:
// // ======================================================
// Напишите функцию JavaScript, которая принимает два аргумента: строку и букву. Функция должна подсчитывать количество вхождений указанной буквы в строке.

// Решение:
// // ======================================================

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ЗАДАЧИ НА ПРИМЕНЕНИЕ МЕТОДОВ ПЕРЕБОРА МАССИВА
// ===============================================================
// Задать массив n случайных целых чисел из диапазона [n1;n2]
// Решение:

// ===============================================================
// Скопировать часть элементов массива на новые позиции (затирая предыдущие элементы)
// Решение:
// ===============================================================

// Найти максимум или минимум в массиве
// let arr = [2,4,3,1];
// Решение:
// ===============================================================

// Найти сумму элементов массива

// Решение:
// ===============================================================

// Узнать, если ли в массиве повторяющиеся элементы
// let arr1 = [2,4,3,1];
// Решение:
// ===============================================================

// Узнать, есть ли в массиве некоторое значение
// let arr = [2,4,3,1,2,1];
// Решение:
// ===============================================================

// Выполнить некую функцию для каждого элемента массива
// let arr = [ 1, 2, 3, 4, 5 ];
// Решение:
// ===============================================================

// Выполнить некую функцию для каждого элемента массива и вернуть массив результатов выполнения этой функции
// let arr = [ 1, -2, -3, 4, 5 ];

// Выполнить некую функцию для каждого элемента массива и проверить, истинны ли все результаты вызова функции
// let arr = [ 1, 2, 3, 4, 5 ];

// Отфильтровать массив (оставить элементы, отвечающие нужному условию или условиям)
// let arr = [5, 4, 3, 8, 0];

// ===============================

// const value = 0;
// // undefined, 0, NaN, null, false, ""

// console.log(value ?? 5);

// const items = [
//   { original_title: "Batman", title: "Batman forever" },
//   { original_title: "", title: "Batman forever" },
// ];

// console.log("original_title:", items[1].original_title ?? items[1].title);
// ====================================

// const array = [
//   {
//     number: 1,
//     numbers: [
//       { number: 11, numbers: [{ number: 111, numbers: [] }] },
//       { number: 12, numbers: [{ number: 121, numbers: [] }] },
//     ],
//   },
//   {
//     number: 2,
//     numbers: [],
//   },
//   {
//     number: 3,
//     numbers: [
//       { number: 31, numbers: [{ number: 311, numbers: [] }] },
//       {
//         number: 32,
//         numbers: [{ number: 321, numbers: [{ number: 321, numbers: [] }] }],
//       },
//     ],
//   },
// ];

// const createMarkup = (arr) => {
//   const res = arr.reduce((acc, item) => {
//     acc += `<li>${item.number}${
//       item.numbers.length ? createMarkup(item.numbers) : ""
//     }</li>`;
//     return acc;
//   }, "");
//   return `<ul type="circle">${res}</ul>`;
// };

// const div = document.querySelector("#tree");
// div.innerHTML = createMarkup(array);

/* <ul>
  <li>
    <h3>1</h3>
    <ul>
      <li>
        <h4>11</h4>
        <ul>
            <li>111</li>
        </ul>
      </li>
      <li>
        <h4>12</h4>
      </li>
    </ul>
  </li>
  <li>
    <h3>2</h3>
  </li>
  <li>
    <h3>3</h3>
  </li>
</ul>; */

// ======================================
// const arr = [1, 2, 3, "o", 5, 6];

// const res = arr.reduce((acc, item, idx) => {
//   console.group();
//   console.log("item :>> ", item);
//   console.log("idx :>> ", idx);
//   console.groupEnd();
// //   debugger;
//   acc += item;
//   return acc;
// }, 0);

// console.log(res);

// =========================================

const server = {
  orders: [],
};

const shop = {
  products: {
    categories: {
      tools: [],
      toys: [],
      electronics: [],
    },
  },
  cart: {
    items: [],
    totalPrice: 0,
  },
};

const user1 = {
  name: "Alex",
};
const user2 = {
  name: "Nikita",
};

const admin = {
  name: "admin",
};

const addProduct = (category, product) => {
  shop.products.categories[category].push(product);
};

const removeProduct = (category, id) => {
  shop.products.categories[category] = [
    ...shop.products.categories[category].filter(
      (product) => product.id !== id
    ),
  ];
};

const addToCart = (product) => {
  shop.cart.totalPrice += product.price;
  if (shop.cart.items.some((item) => item.id === product.id)) {
    shop.cart.items = shop.cart.items.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    return;
  }
  shop.cart.items.push({ ...product, quantity: 1 });
};

const removeFromCart = (product) => {
  shop.cart.totalPrice -= product.price;
  const targetProduct = shop.cart.items.find((item) => item.id === product.id);
  if (targetProduct && targetProduct.quantity > 1) {
    shop.cart.items = shop.cart.items.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
    );
    return;
  }
  shop.cart.items = shop.cart.items.filter((item) => item.id !== product.id);
};

const product = {
  id: "dsdadsaas",
  name: "Milk",
  price: 30,
};

addToCart(product);
console.log("shop.cart :>> ", shop.cart);
debugger;
addToCart(product);
console.log("shop.cart :>> ", shop.cart);
debugger;
removeFromCart(product);
console.log("shop.cart :>> ", shop.cart);
debugger;
removeFromCart(product);
console.log("shop.cart :>> ", shop.cart);
// console.log([1, 2, 3, 4, 5].filter((item) => item !== 4));
