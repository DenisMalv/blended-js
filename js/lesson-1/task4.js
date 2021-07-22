// Guessing game
// Your task is to write a simple simulator of casino roulette.
// Requirements:
// Step 1:
// -     Create a prompt window (use confirm()). Show the message inside the window 'Do you want to play a game?'.
// -     In case the user clicks the 'Cancel' button, the message 'You did not become a billionaire, but can.' should be shown (use alert).
// Step 2:
// -     If user clicked 'Ok' – start a game: randomly (use Math.random()) choose an integer number in range [0; 5] (including 0 and 5) and ask user to enter a number of pocket on which the ball could land (use prompt()).
// -     User has 3 attempts to guess a number.
// -     If user guessed the number on which ball landed, on 1-st attempt prize is 100$ (maximum prize for current numbers range), 2-nd attempt – 50$, 3-rd attempt – 25$.
// -     If user did not guess a number show the message 'Thank you for your participation. Your prize is: … $' (Use alert) and ask if he wants to play again (use confirm).
// Step 3:
// -     If user did guess - Show the message 'Congratulation, you won!  Your prize is: … $. Do you want to continue?'.
// -     If user does not want to continue – show the message 'Thank you for your participation. Your prize is: … $' (Use alert) and ask if he wants to play again (use confirm).
// -     If user does want to continue, make number range bigger at 5 as the previous one (for example [0; 5] -> [0; 10]), and two times bigger maximum prize (for example on 1-st attempt prize will be 200$, 2-nd attempt – 100$, 3-rd attempt – 50$). Prize must be added to the previous one and number of attempts should be set to 3 (user should have 3 attempts to guess a number for each numbers range)
// -     Each time you ask user to enter a number you should show him a range of cells, how much attempts he has left, his total prize and possible prize on current attempt. See: https://prnt.sc/16hlsk1
// -     All these stuffs should be repeated until user lose or decide to quit

//Создайте окно подсказки (используйте подтверждение ()). Показать сообщение в окне «Хотите сыграть в игру?».
// - В случае, если пользователь нажимает кнопку «Отмена», появляется сообщение «Вы не стали миллиардером, но можете». должен быть показан (используйте предупреждение).
// Шаг 2:
// - Если пользователь нажал кнопку «ОК» - запускаем игру: случайным образом (используйте Math.random ()) выбираем целое число в диапазоне [0; 5] (включая 0 и 5) и попросите пользователя ввести номер лузы, в которую может приземлиться мяч (используйте подсказку ()).
// - У пользователя есть 3 попытки угадать число.
// - Если пользователь угадал номер, на который приземлился шарик, приз за 1-ю попытку составляет 100 $ (максимальный приз для текущего диапазона номеров), за 2-ю попытку - 50 $, за 3-ю попытку - 25 $.
// - Если пользователь не угадал число, отобразится сообщение «Спасибо за участие. Ваш приз:… $ '(используйте предупреждение) и спросите, не хочет ли он играть снова (используйте подтверждение).
// Шаг 3:
// - Если пользователь угадал - Показать сообщение «Поздравляем, вы выиграли! Ваш приз:… $. Вы хотите продолжить?'.
// - Если пользователь не хочет продолжать - показать сообщение «Спасибо за участие. Ваш приз:… $ '(используйте предупреждение) и спросите, не хочет ли он играть снова (используйте подтверждение).
// - Если пользователь хочет продолжить, увеличьте диапазон номеров на 5 по сравнению с предыдущим (например [0; 5] -> [0; 10]) и в два раза больше максимального приза (например, на 1-м приз попытки - 200 $, 2-я попытка - 100 $, 3-я попытка - 50 $). Приз должен быть добавлен к предыдущему, а количество попыток должно быть установлено на 3 (у пользователя должно быть 3 попытки угадать число для каждого диапазона чисел)
// - Каждый раз, когда вы просите пользователя ввести число, вы должны показывать ему диапазон ячеек, сколько попыток у него осталось, его общий приз и возможный приз за текущую попытку
// 1) готов ли начать.
// 2) если готов, задать рандом диапазон, и ввести число.
// 3) 
let price = 0
let startPrice = 100
let attempts = 3;
const minRange = 0;
let maxRange = 5;
let randomNumber;
let userNumber;
let totalPrice = 0


let startGame = confirm('Хотите сыграть в игру?');

if (startGame === true) {                   // старт игры
    op: while (startGame === true) {        // запуск цыкла всей игры.
        maxRange = 5;
        startPrice = 100
        // price = startprice
        totalPrice = 0
        randomNumber = (Math.floor(Math.random() * (Number(maxRange) - Number(minRange) + 1)) + Number(minRange));                       // выберается рандом число при старте игры (первая итерация)
        console.log(`Искомое рандом число: ${randomNumber}`) //подсказка в дев тулзах
   
        ip: for (attempts = 3; attempts >= 1; attempts -= 1) { //цыкл для угадывания рандом числа, 3 попытки.
            price = startPrice              
            if (attempts === 2) {           // На каждую итерацию свой выигрыш
                price = startPrice * 0.5
            } else if (attempts === 1) {
                price = startPrice * 0.25
            }
            
            userNumber = prompt(`  Выберите число в диапазоне: ${minRange} to ${maxRange}\n  Осталось попыток: ${attempts}\n  Выиграш за текущую попытку: ${price}`)  //Пользователь вводит число
            if (userNumber === null) {              //Проверка на отмену.
                alert(`  Спасибо за участие.\n  Ваш приз: ${totalPrice} `)
                break op
            } else if (userNumber.trim().length <= 0 || isNaN(userNumber)) { //Проверка на пустую строку либо буквы.
                alert(`  Введите целое число`)
                attempts = attempts + 1 // если пользователь ввел не число то увеличиваем итерацию на 1 и повторяем цикл.
                continue ip
            } 
            
            if (Number(userNumber) === Number(randomNumber)) {  // сравнение юзерчисла и рандом числа.
                totalPrice += price                             // если угадал  прибавить сумму к выиграшу.
                
                console.log(`${attempts}, ${userNumber}, ${randomNumber}, ${price}, ${totalPrice}`)
                let continueGame = confirm(`  Поздравляем, вы выиграли!\n  Ваш приз: ${price}\n  Вся сумма: ${Number(totalPrice)}\n  Искомое число: ${randomNumber}\n  Желаете продолжить?`);    //вывод результата, при выиграше, и предложение играть дальше
                if (continueGame === true) {        // если согласился, то запускается следующий повторяющийся цыкл(с увеличением значений)
                    up: while (startGame === true) { //замкнутый цыкл с увеличивающимися значениями.
                        maxRange += 5   //с каждым цыклом увеличить значение на 5.
                        startPrice = startPrice * 2 //с куаждым цыклом увеличить значение в 2 раза.
                        
                        randomNumber = (Math.floor(Math.random() * (Number(maxRange) - Number(minRange) + 1)) + Number(minRange));
                        console.log(`при разработке Рандом число: ${randomNumber}`)  //выбор рандом числа, с увеличенным значением.
                            
                     yp:   for (attempts = 3; attempts >= 1; attempts -= 1) { //3 итерации ввода числа.
                            price = startPrice
                            if (attempts === 2) {                           //на каждую итерацию свой выигрыш( равен 0.5 от предидущего.)
                                    price = startPrice * 0.5
                                } else if (attempts === 1) {
                                    price = startPrice * 0.25
                            }     
                                        
                            userNumber = prompt(`  Выберите число в диапазоне: ${minRange} to ${maxRange}\n  Осталось попыток: ${attempts}\n  Выиграш за текущую попытку: ${price}`)  //игрок вводит число.
                            if (userNumber === null) {                          //проверка на отмену
                                alert(`  Спасибо за участие.\n  Ваш приз: ${totalPrice} `)
                                break op
                            } else if (userNumber.trim().length <= 0 || isNaN(userNumber)) { //проверка на пустую строку или букву
                                alert(`  Введите целое число`)
                                attempts = attempts + 1  // если пользователь ввел не число то увеличиваем итерацию на 1 и повторяем цикл.
                                continue yp
                            }
                            console.log(`${attempts}, ${userNumber}, ${randomNumber}, ${price}`) //комментарии для разработчика.

                            if (Number(userNumber) === Number(randomNumber)) {   //сравнение числа игрока и рандом числа.     
                                totalPrice += price
                                
                                let continueGame = confirm(`  Поздравляем, вы выиграли!\n  Ваш приз: ${price}\n  Вся сумма: ${Number(totalPrice)}\n  Искомое число: ${randomNumber}\n  Желаете продолжить?`);
                                if (continueGame === true) { // если выиграл, и продолжаешь играть продолжаем повторять цыкл up:
                                    continue up
                                } else {                     // если выиграл но не играешь дальше.
                                    alert(`  Спасибо за участие.\n  Ваш приз:(вложенный) ${totalPrice}\n  Искомое число: ${randomNumber} `)
                                    break op
                                }
                                            
                            } else {  // не угадал из 3х попыток число.
                                price = 0
                                alert(`  Спасибо за участие.\n  Ваш приз:(вложенный) ${price}\n  Вся сумма${Number(totalPrice)}`)
                                if (attempts === 1) {  // на последней итерации цыкла если не угадал, предлагает начать сначала, если согласен запускает стартовый цыкл ip:
                                    let resetGame = confirm(`  Искомое число: ${randomNumber}\n  начать сначала(вложенный)?`);
                                
                                    if (resetGame === true) {
                                        continue ip                                       
                                    } else {  // на последней итерации ---- если не согласен то выводит алерт. и завершает цыкл игры.
                                        alert(`  Спасибо за участие.\n  Ваш приз:(вложенный) ${totalPrice}\n  Искомое число: ${randomNumber} `)
                                        break op
                                    }
                                }
                            }
                        }
                    }
                } else {   // отказался играть дальше получаешь вывод.
                    alert(`  Спасибо за участие.\n  Ваш приз: ${totalPrice} `)
                    break op
                }
                
            } else {    //если не угадал за 3 попытки, получаешь вывод и предложение играть снова.
                console.log(`${attempts}, ${userNumber}, ${randomNumber}, ${price}, ${totalPrice}`)
                price = 0
                alert(`  Спасибо за участие.\n  Ваш приз: ${price}\n  Вся сумма: ${Number(totalPrice)}`)
                if (attempts === 1) {  //на последнем цыкле если не угадываешь получаешь смс о проиграше и предлжение начать сначала.

                    let resetGame = confirm(`  Искомое число: ${randomNumber}\n  Начать сначала?`);
                    if (resetGame === true) {
                        continue op //если согласен играть с начала , цыкл по метке op: снова запускается.
                    } else { 
                    break op  // если отказываешься играть сначала, цыкл по метке ор: прерывается.
                }
                }
                continue // повторяет цыкл, до последней попытки.
            }         
       
        }
    }
} else {
   (alert('  Вы не стали миллиардером, но можете'));
}
console.log(startGame)
console.log(attempts)
console.log(userNumber)
console.log(randomNumber)



//==================================================
// let price = 200
// let attempts = 3;
// const minRange = 0;
// let maxRange = 3;
// let randomNumber;
// let userNumber;
// let continueGame;

// const startGame = confirm('Do you want to play a game?');

// if (startGame === true) {
//     randomNumber = (Math.floor(Math.random() * (Number(maxRange) - Number(minRange) + 1)) + Number(minRange));
//     alert(`Your number diapasone : ${minRange} - ${maxRange}`)
   
//     for (attempts; attempts >= 1 ; attempts -= 1) {
//         price = price * 0.5
//         userNumber = prompt('Enter your a number of pocket on which the ball could land')
//          console.log(`${attempts}, ${userNumber}, ${randomNumber}`)
//         if (Number(userNumber) === Number(randomNumber)) {
//             alert(`Поздравляем, вы выиграли! Ваш приз:… ${price}`)
//             confirm('play again')
//             startGame;
//             break;
//     } else {
//             alert(`Спасибо за участие. Ваш приз:… ${price}`)
//             confirm('you lose play again')
//             startGame
//             continue          
//         }
       
//     }
    
    
// } else {
//    (alert('You did not become a billionaire, but can.'));
// }
// console.log(startGame)
// console.log(attempts)
// console.log(userNumber)
// console.log(randomNumber)

//========================================================================

//  randomNumber = Math.floor(Math.random() * (Number(maxRange) - Number(minRange) + 1)) + Number(minRange);
//         alert(`Your number diapasone : ${minRange} - ${maxRange}`)
//     for (attempts; attempts <= 3 && attempts >= 1; attempts -= 1) {
        
//         userNumber = prompt('Enter your a number of pocket on which the ball could land')
//         if (Number(userNumber) === randomNumber ) {
//             continueGame = confirm(`Congratulation, you won!  Your prize is: ${price}. Do you want to continue?`)
//         } else {
//             alert(`Thank you for your participation. Your prize is: ${price}`)
//             startGame;