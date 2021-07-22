//Task 1. Find middle character of the word.
// User is going to input a word. Your task is to find the middle character of this word.
// If the word’s length is odd - return the middle character.If word’s length is even - return the middle 2 characters.
// You should validate for empty value and for value with spaces only, in that case show message: “Invalid value”.
// For user input use “prompt” function. For displaying result use “alert” function.

// Examples:
// 	For user input “test” should return “es”
// 	For user input “character” should return “a”
// 	For user input “B” should return “B”
// 	For user input “” should return “Invalid value”
// For user input “       “ should return “Invalid value”


const word = prompt('Please enter a word')
let result = 'Thank you for word';
//console.log(word)
// if (word === '') {
//     result = 'Invalid value';
    
// } else if (word === null) {
//     result = 'Good luck'
    
// } else if (word.trim() === '') {
//     result = 'Invalid value';
  
// } 
//  alert(result);

// if (word.length % 2 === 0 ) {
//     result = (word.length / 2)
//     alert(`${word[result - 1]}${word[result]}`)
// } else {
//     result = Math.floor(word.length / 2);
//     alert(word[result])
// }
// console.log(result)

if (word && word.trim()) {                    // Если ворд(символы есть) и вотд.трим(отбросивши все 
                                              // пробелы слева и справа то выполни)
    if (word.length % 2 === 0) {              
    result = (word.length / 2)
    alert(`${word[result - 1]}${word[result]}`)
 } else {
     result = Math.floor(word.length / 2);
     alert(word[result])
 }
} else {
    alert('Invalid value')
}

