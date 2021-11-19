// ================ Lesson 4 ================
// task 2
// Write a function – letterCount
// It accepts two string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.
// For example:
// letterCount("Maggy", "g") // => 2
// letterCount("Barry", "b") // => 1
// letterCount("", "z")      // => 0
const letterCount = function (word, letter) {
    word = word.toLowerCase().split('').reduce((acc, l) => (l === letter ? acc+1 : acc),0)
    
    return word
}
console.log(letterCount("MaGgy", "g"))
console.log(letterCount("Barry", "b"))
console.log(letterCount("", "z"))

//task-3
// Our football team completed the championship. The result of each match look like "x:y".
// Results of all matches are recorded in the collection like this: ["3:1", "2:2", "0:1", ...]

// Write a function – countPoints
// It should accept a collection of football games scores and count the points of our team in the championship.
// Rules for counting points for each match:
// •	if x > y   - 3 points
// •	if x < y   - 0 point
// •	if x = y   - 1 point

// For example:
// countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0']) // => 17
// countPoints(['1:1', '1:2', '2:0', '4:2', '0:1', '2:3', '1:1', '0:1', '1:1', '3:0']) // => 12
// ======================= 1st variant
// const countPoints = function (array) {
//     let res = 0
//     for(const word of array) {
//         console.log(word)
//         if (word.charAt(0) > word.charAt(2)) {
//             // console.log('good')
//             res +=3
//         } if (word.charAt(0) < word.charAt(2)) {
//             // console.log('bad')
//             res +=0
//         } if (word.charAt(0) === word.charAt(2)) {
//             // console.log('zero')
//             res+=1
//         }    
//    }
//    return res
// }


// =================== 2nd variant

// const countPoints = (array) => {
//     const newArray = array.map(arr => arr.split(':'));
//     const winArray = newArray.filter(p => p[0]>p[1]).length;
//     const remissArray = newArray.filter(p => p[0]===p[1]).length;
// return winArray*3+remissArray}

// ===================3 variant
const countPoints = (array) => array.reduce((acc, num) => acc + (num[0] > num[2] ? 3 : num[0] === num[2] ? 1 : 0), 0)

console.log(countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0']));
console.log(countPoints(['1:1', '1:2', '2:0', '4:2', '0:1', '2:3', '1:1', '0:1', '1:1', '3:0']))


