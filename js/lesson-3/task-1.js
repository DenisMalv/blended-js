// task-1
// 1. Write a function that converts the argument values. If it will be a string, convert it to number and wise versa.
// It should return an array of converted values.
// convert('1', 2, 3, '4') 
// [1, '2', '3', 4]

// const a = function(...value) {
//     const result = []
//     for (const v of value) {
//         if (typeof v === 'number') {
//             result.push(String(v))
//         } else {
//             result.push(Number(v))
//         }
    
//     }
    
//     return result
// }
// console.log(a('1', 2, 3, '4', 5, 6, 7, 8, 9, '10'))

// task-2 callback
// Write function, which iterates over array and executes function on each element.
//   executeforEach([1, 2, 3], function (el) {
//     console.log(el * 2);
//   });
// executeforEach([1,2,3], function(el) {console.log(el * 2)}) // 2 4 6

// const executeforEach = function (array, callback) {
//     const res = []
//     for (const i of array) {
//     callback(i)
//     }
// }
// executeforEach([1,2,3], function(el) {console.log(el * 2)}) // 2 4 6
// function c(el) {
//     return el*2
// }

// task-3
// Write a function which creates an array from the given range of numbers
// makeListFromRange([2, 7]) // [2, 3, 4, 5, 6, 7]
// makeListFromRange([8, 5]) // [5, 6, 7, 8]

// 1) написать функцию с 2мя переменными старт  енд
// 2)сделать проверку на какое число больше старт или енд.
// 3) использовать фор и на каждой итерации пушить i от старта до енда в новый массив
// 4) использовать иф если число енд больше чем  старт тогда пушить в обратном порядке через аншифт.

// const makeListFromRange = function ([start,end]) {
//     const res = []
//     if (start < end) {
//         for (let i = start; i <= end; i += 1) {
//             res.push(i)
//             console.log(i)
//         } 
//     } else {
//        for (let i = end; i <= start; i += 1) {
//             res.push(i)
//         }  
//     }
//     return res
// }
// makeListFromRange([2, 7])
// console.log(makeListFromRange([2, 7]))
// console.log(makeListFromRange([8, 5]))
 

// task-4 callback
// Write function substitute() that accepts an array of numbers and manages to replace all numbers lower than 20 and greater than 10
// with '*'. It should return a new array with numbers and '*' instead of these numbers.
// substitute([58, 14, 48, 12, 31, 19, 10]);
// // returns [58, '*', 48, '*', 31, '*', 10]

// function substitute(array) {
//     const res = []
//     for (let i of array) {
//         if (i <= 20 && i > 10) {
//             i = '*'
//             res.push(i)
//         } else {
//             res.push(i)
//         }
//     }
//     return res
    
// }
// console.log(substitute([58, 14, 48, 12, 31, 19, 10]))

// task-5 
// filterArray([2, 5, 8], function(el) { return el % 2 === 0 }) // returns [2, 8]
///////// callbacks
// function b(el) {
//     return el % 2 === 0 
// }
// ------------------------------------------executeforeach --------------------
// const executeforEach = function (array, callback) {
//     for (const i of array) {
//     callback(i)
//     }
// }
// ------------------------------------------executeforeach --------------------
// executeforEach([1,2,3], function(el) 
// { console.log(el * 2) }) 
// 2 4 6


//     function filterArray(arr, callBack) {
//     const superArray = [];
//     executeforEach(arr, arg => (callBack(arg) ? superArray.push(arg) : 0));
//     return superArray;
//   }

//     // callback(executeforEach)
//     // executeforEach(array, callback){
//     //     if (callback(item))
//     //         res.push(item)
//     //     }
//     // }
//     // for (const item of array) {
//     //     if (callback(item)) {
//     //         res.push(item)
//     //     }
//     // }
//     // return res

// console.log(filterArray([2, 5, 8],b))3
//-------------------------------------------
// function filterArray(arr, callBack) {
//     const superArray = [];
//     const suppercallback = (arg) => (callBack(arg) ? superArray.push(arg) : 0)
//     executeforEach(arr, suppercallback);
//     return superArray;
// }
//----------------------------------
// const filterArray = (array, callback) => {
//   const filteredArray = [];
//   const fillArray = (item) => {
//     if (callback(item)) {
//       filteredArray.push(item);
//     }
//   };
//   executeforEach(array, fillArray);
//   return filteredArray;
// };

// console.log(filterArray([2, 5, 8], function(el) { return el % 2 === 0 })) // returns [2, 8]

// task-5
// const fruits = [
//   { name: `apple`, weight: 0.5 },
//   { name: `pineapple`, weight: 2 },
// ];

//передаем ключик нейм и функция должна вернуть велью по этому ключу
//getArrayOfKeys(fruits, ‘name’);
// returns [‘apple’, ‘pineapple’]
// const executeforEach = function (array, callback) {
//     for (const i of array) {
//     callback(i)
//     }

// const getArrayOfKeys = function(array, key){
//     const res = []
//     const suppres = function (array) {
//         res.push(array[key])
//     }
//     executeforEach(array,suppres)
//     // for (const fruit of array) {
//     //     res.push(fruit[key])
//     // }
//     return res
// }
// console.log(getArrayOfKeys(fruits, 'name'))

// task-6 date
// Write a function that formats a date in such format "YYYY/MM/DD HH:mm".

const formatDate = function (value) {
    const d = Date.parse(value)
    const c = new Date(d)
  const result = (c.getFullYear() + '/' + (c.getMonth()+1) + '/' + c.getDate() + ` ` + c.getHours()+ `:` + c.getMinutes())

    return result
}
console.log(formatDate(`6/15/2019 09:15:00`))

// formatDate(new Date('6/15/2019 09:15:00')) // "2018/06/15 09:15"

// task-7 
// Write a function that checks is array contains arg passed as a parameter value and return true in this case.
// containsValue([2, 5, 8], 2)  // returns true
// containsValue([12, 4, 6], 5)  // returns false

// function containsValue(array,number) {
//     // return array.includes(number) - 1й вариант
     
        

// }
// const containsValue = (array, value) => {
//   const newArray = [];
//   const findValue = (item) => {
//     if (item === value) {
//       newArray.push(value);
//     }
//   };
//   executeforEach(array, findValue)
//     // return !!newArray.length - приведение к булю через !! 
//     if (newArray.length) {
//     return true;
//   } else {
//     return false;
//   }

// };

// console.log(containsValue([2, 5, 8], 2))
// console.log(containsValue([12, 4, 6], 5))

const executeforEach = function (array, callback) {
    for (const i of array) {
    callback(i)
    }
}


// dz - callback
// Write function, which returns transformed array based on function, which passed as a second parameter (callback).
// If array contains a number as string, it should convert it and return as number.  Reuse function executeforEach
// mapArray([2, '5', 8], function(el) {return el + 3}) // returns [5, 8, 11]

const mapArray = function (array, callback) {   
    const res = []
    executeforEach(array,res.push(callback(Number(i))))
return res
}
console.log(mapArray([2, '5', 8], function(el) {return el + 3}))
    
    
// ==complete
// const mapArray = function (array, callback) {   
//     const res = []
//     for (const i of array) {
//         res.push(callback(Number(i)))
//     }
// return res
// }
// console.log(mapArray([2, '5', 8], function(el) {return el + 3}))