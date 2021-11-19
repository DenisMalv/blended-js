// //fist task
// const a = ["a", "b", "c"];
// const b = [1, [2, 3]];
// const c = 0;
// const d = [b[0]].concat(b[1])

// console.log(d)

// let i = a.concat(c,d)
// console.log(i)


// second task 
// const a = ["a", "b", "c", "d", "e", "f", "g", "h"];
// метод 1
// const i = a.splice(3, 3, a[0],a[1],a[2])
// console.log(a)
// console.log(i)
// метод 2
// const i = a.slice(0, 3)
// const y = a.slice(-2)
// console.log(i)
// console.log(y)
// const u = i.concat(i, y)
// console.log(u)
// метод 3
// const e = a.copyWithin(3, 0, 3)
// console.log(e)

// Result: ["a", "b", "c", "a", "b", "c", "g", "h"];



// third task
// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// метод 1
// const i = a.splice(5, 3, 0,0,0)
// console.log(a)
// метод 2
// const y = a.slice(0,5)
// const u = a.slice(7, 10)
// const o = [0, 0, 0]
// const p = y.concat(o,u)
// console.log(p)
// метод 3
// const e = a.fill(0, 5, 8)
// // фил ( 0 - значение которым заменяет.)
// //     ( 5 - с какого индекса заменяем)
// //     ( 8 - до какого индекста заменяем)
// console.log(e)


// Result: [1, 2, 3, 4, 5, 0, 0, 0, 9, 10];


// four task
// метод 1
// const a = [1, 2, [3, 4], [5, 6], 7, [8, 9]];
// const i = a.join(',')
// const o = []
// for (let e of i)
//  if (e !== ','){
//     const t = Number(e)
//     o.push(t)
// }

// console.log(o)
// console.log(i)

// метод 2
// const a = [1, 2, [3, 4], [5, 6], 7, [8, 9]];
// const o = []
// for (let e of a) {          // перебераем массив а
    // if (Array.isArray(e)) { // если наше значение в индексе это массив
        // o.push(e[0])        // то запушь первый и второй элемент в масив О.
        // o.push(e[1])
        
    // } else {                // если значение не массив то просто пуш в массив О.
        // o.push(e)
    // }
// }
// console.log(o)
// метод 3
// const a = [1, [2, [ [3, 4], [5, 6], 7, [8, 9]]]];
//const i = a.flat(Infinity)  // - Метод flat() возвращает новый массив, в котором все элементы вложенных 
//console.log(i)              // подмассивов были рекурсивно "подняты" на указанный уровень depth.
                            // a.flat(может быть пусто, а может быть глубина массива)
// Result: [1, 2, 3, 4, 5, 6, 7, 9]

// five task
// metod 1
// const a = 'alona'
// const i = a.split('')
// console.log(i)

// metod 2
// const i = Array.from(a)
// console.log(i)
// Result: ['a', 'l', 'o', 'n', 'a']

// six task
// const a = ['a', 'l', 'o', 'n', 'a']
// const i = a.join(',')
// console.log(i)
// metod 2
// const i = a.toString()
// console.log(i)

// Result: 'a,l,o,n,a'

// seven task
// const a = ['a', 'k', 'n', 'h', 'n', 'n', 'k']
// let res ;
// for (let i = 0; i <= a.length; i += 1) {
//     if (a[i] === 'n') {
//         res = i 
//     } 
// }
// console.log(res)
// metod 2 lastIndexOf
// const a = ['a', 'k', 'n', 'h', 'n', 'n', 'k']
// const i = a.lastIndexOf('n')
// console.log(i);

// 8 task
// const a = [1, 2, 3, 4, 5, 6, 7]
// const res = []
// for (let i = a.length -1; i >= 0; i -= 1) { 
//     res.push(a[i])
// }
// console.log(res)
//   metod 2 reverse
// const i = a.reverse()
// console.log(i)

// Result: [7, 6, 5, 4, 3, 2, 1]

// 9 task
// Write a function that reverse an integer number. You can't use any array methods, besides push.
// reverseNumber(12345) returns 54321

// function reverseNumber(num) {
//     // console.log(num)
   
//     let u = num         //запись параметра функции в переменную
//     u = u.toString()    //Преобразование переменной в строку.

//     let string='';      // обьяваление переменной результата(пустая строка)
//     for (let i = u.length -1; i >= 0 ; i -= 1) {  //цыкл перебора символов, начиная от последнего, до 0 с 
//                                                  //шагом -1.
//         string += u[i]                           // в каждой итерации пристваиваем по 1 символу в наш 
//     }                                            // результат переменная string
//     console.log(Number(string))                  //переводим нашу строку в число и выводим результат.
//     return string;
   
// }

// reverseNumber(123456789)


function squareDigits(num){
  const result = Math.pow(num, 2);
  return result;
}

console.log(squareDigits(6))