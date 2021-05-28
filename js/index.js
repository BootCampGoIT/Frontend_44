// //! exercises
// // 1. Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
// // console.log(min(2, 5)); // 2
// // console.log(min(3, -1)); // -1
// // console.log(min(1, 1)); // 1

// // 2. Напиши функцию logItems(array), которая получает массив и использует цикл for, который для каждого элемента массива будет выводить в консоль сообщение в формате <номер элемента> - <значение элемента>. Нумерация элементов должна начинаться с 1.

// // Например для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено 1 - Mango, а для индекса 2 выведет 3 - Ajax.

// // 3. Напиши функцию findLargestNumber(numbers), которая ищет самое маленькое число в массиве.
// //    console.log(findSmallestNumber([2, 17, 94, 1, 23, 37])); // 94
// //    console.log(findSmallestNumber([49, 4, 83, 7, 12])); // 83

// // 4. Напиши функцию calculateAverage() которая принимает произвольное кол-во аргументов и возвращает их среднее значение. Все аругменты будут только числами.

// console.dir(new Number(987456));

// function digitize(n) {
//   const arr = n.toString().split("").reverse();
//   const arr1 = [];
//   for (let i = 0; i < arr.length; i++) {
//     arr1.push(+arr[i]);
//   }
//   return arr1;
// }

// const a = 187456;
// let i = 10;
// const result = [];
// let dec = 0;

// while (a / i > 1) {
//   const res = Math.floor(a / i);
//   result.push(Math.trunc((a / i - res) * 10));
//   i *= 10;
// }

// console.log(result);
