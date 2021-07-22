let price = 0
let startPrice = 100
let attempts = 3;
const minRange = 0;
let maxRange = 3;
let randomNumber;
let userNumber;
let totalPrice = 0


let startGame = confirm('Do you want to play a game?');

if (startGame === true) {
    op: while (startGame === true) {
        maxRange = 3;
        startPrice = 100
        // price = startprice
        totalPrice = 0
        randomNumber = (Math.floor(Math.random() * (Number(maxRange) - Number(minRange) + 1)) + Number(minRange));
        // alert(`Your number diapasone : ${minRange} - ${maxRange}`)
   
        ip: for (attempts = 3; attempts >= 1; attempts -= 1) {
            price = startPrice
            if (attempts === 2) {
                price = startPrice * 0.5
            } else if (attempts === 1) {
                price = startPrice * 0.25
            }
            
            userNumber = prompt(`Choose a roulette poket number from: ${minRange} to ${maxRange}\nAttempts left: ${attempts}\nPossible prize on current attempt: ${price}`)
            if (userNumber === null) {
                alert(`Thank you for your participation. Your prize is: ${totalPrice} `)
                break op
            } else if (userNumber.trim().length <= 0 || isNaN(userNumber)) {
                alert(`Enter number`)
                break ip
            } 
            
            if (Number(userNumber) === Number(randomNumber)) {
                totalPrice += price
                alert(`Congratulation, you won!  Your prize is: ${price}, total price: ${Number(totalPrice)} `)
                console.log(`${attempts}, ${userNumber}, ${randomNumber}, ${price}, ${totalPrice}`)
                let continueGame = confirm('Do you want to continue?');
                if (continueGame === true) {
                    up: while (startGame === true) {
                        maxRange += 5
                        startPrice = startPrice * 2
                        // price = startprice
                        randomNumber = (Math.floor(Math.random() * (Number(maxRange) - Number(minRange) + 1)) + Number(minRange));
                        // alert(`Your number diapasone : ${minRange} - ${maxRange}`)
                            
                        for (attempts = 3; attempts >= 1; attempts -= 1) {
                            price = startPrice
                            if (attempts === 2) {
                                    price = startPrice * 0.5
                                } else if (attempts === 1) {
                                    price = startPrice * 0.25
                            }     
                                        
                            userNumber = prompt(`Choose a roulette poket number from: ${minRange} to ${maxRange}\nAttempts left: ${attempts}\nPossible prize on current attempt: ${price}`)
                            if (userNumber === null) {
                                alert(`Thank you for your participation. Your prize is: ${totalPrice} `)
                                break op
                            } else if (userNumber.trim().length <= 0 || isNaN(userNumber)) {
                                alert(`Enter number`)
                                break ip
                            }
                            console.log(`${attempts}, ${userNumber}, ${randomNumber}, ${price}`)

                            if (Number(userNumber) === Number(randomNumber)) {       
                                totalPrice += price
                                alert(`Congratulation, you won!  Your prize is: ${price}, total price: ${Number(totalPrice)}  `)
                                let continueGame = confirm('Do you want to continue?');
                                if (continueGame === true) {
                                    continue up
                                } else {
                                    alert(`Thank you for your participation. Your prize is: ${totalPrice} `)
                                    break op
                                }
                                            
                            } else {
                                price = 0
                                alert(`Thank you for your participation. Your prize is: ${price}, total price: ${Number(totalPrice)} `)
                                if (attempts === 1) {
                                    let resetGame = confirm('Game again ?');
                                
                                    if (resetGame === true) {
                                        continue ip                                       
                                    } else {
                                        alert(`Thank you for your participation. Your prize is: ${totalPrice} `)
                                        break op
                                    }
                                }
                            }
                        }
                    }
                } else {
                    alert(`Thank you for your participation. Your prize is: ${totalPrice} `)
                    break op
                }
                
            } else {
                console.log(`${attempts}, ${userNumber}, ${randomNumber}, ${price}, ${totalPrice}`)
                price = 0
                alert(`Thank you for your participation. Your prize is: ${price}, total price: ${Number(totalPrice)} `)
                if (attempts === 1) {
                    let resetGame = confirm('Game again ?');
                    if (resetGame === true) {
                        continue op
                    } else {
                    break op
                }
                }
                continue 
            }         
       
        }
    }
} else {
   (alert('You did not become a billionaire, but can.'));
}
console.log(startGame)
console.log(attempts)
console.log(userNumber)
console.log(randomNumber)
console.log(price)
console.log(totalPrice)
console.log(resetGame)
