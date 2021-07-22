//Task 3
// Write the code which verify user rights.
// Step 1. Check login
// 	Ask user for a login // use prompt()
// 	If the input is an empty line or Esc – show “Canceled.” // for showing - use alert()
// 	If the input length less than 4 symbols - show “I don't know any users having name length less than 4 symbols”.
// 	If the visitor enters "User" or "Admin", then prompt for a password.
// 	If it’s another string – then show “I don’t know you”.
// Step 2. Check password:
// 	For an empty string or cancelled input, show “Canceled.”
// 	For login “User” correct password is “UserPass”, for “Admin” correct password is  “RootPass”.
// In other case, show “Wrong password”.
// Step 3. Greets the user appropriately:
// 	If the current time in hours is more then 5.00 and less then 20: // current hours – new Date().getHours()
// 	For “User” show “Good day, dear User!”
// 	For “Admin” show “Good day, dear Admin!”
// 	In other way:
// 	For “User” show “Good evening, dear User!”
// 	For “Admin” show “Good evening

//start
const inputLogin = prompt('user login')
let password
let dayTime
if (inputLogin && inputLogin.trim()) {  //Проверка на введенные символы.
    if (inputLogin.length < 4 ) {       //проверка на длину введенного слова.
        alert("I don't know any users having name length less than 4 symbols");
        
    } else if (inputLogin === 'user' || inputLogin === 'admin') {  //Проверка зарегестрированых пользователей User и Admin.
        password = prompt('account password')
        if (password && password.trim()) { // Проверка введенного пароля на пустые символы.
            if (inputLogin === 'user' && password === 'UserPass' || inputLogin === 'admin' &&  password === 'RootPass' ) {  // проверка Логина и пароля зарег. пользов.
                dayTime = new Date().getHours();
                const goodDay = `Good day, dear ${inputLogin}!`;
                const goodEvening = `Good evening, dear ${inputLogin}!`;
                 if (dayTime >= 5 && dayTime <= 20) { // Проверка времени суток, если больше 5:00 и меньше 20:00.
                    alert(goodDay)
                } else {  // Ответ если не попал в диапазон с 5:00 до 20:00
                    alert(goodEvening)
                }
            } else { // оТвет если введен не пустой и неправильный пароль.
                alert('wrong pass')
            }
        } else { // оТвет если введен пустой пароль пароль.
                alert('wrong pass')
            }
    } else { // ответ если введен незарегестрированный позьзователь.
    alert('I don’t know you')
}
    
} else { // ответ, если нажали cancel, esc или пустую строку.
    alert('Canceled')
}
    
console.log(`Логин:${inputLogin}\nПароль:${password}\nМестное время:${dayTime}`)

  









// if (inputLogin.length < 4) {
//     alert("I don't know any users having name length less than 4 symbols");
// }
// if (inputLogin === 'user' || inputLogin === 'admin') {
//     const password = prompt('user password')
// } else {
//     alert('I don’t know you')
