const form = document.querySelector('.calcBody')
const display = form.querySelector('.display')
const multiple = form.querySelector('#multiple')
const stripped = form.querySelector('#stripped')
const plus = form.querySelector('#plus')
const minus = form.querySelector('#minus')
const degree = form.querySelector('#degree')

const buttonOne = form.querySelector('#buttonOne')
const buttonTwo = form.querySelector('#buttonTwo')
const buttonThree = form.querySelector('#buttonThree')
const buttonForur = form.querySelector('#buttonForur')
const buttonFive = form.querySelector('#buttonFive')
const buttonSix = form.querySelector('#buttonSix')
const buttonSeven = form.querySelector('#buttonSeven')
const buttonEigth = form.querySelector('#buttonEigth')
const buttonNine = form.querySelector('#buttonNine')
const buttonZero = form.querySelector('#buttonZero')

const buttonResult = form.querySelector('.result')
const buttonCE = form.querySelector('.CE')

plus.addEventListener('click',insert)
minus.addEventListener('click',insert)
multiple.addEventListener('click',insert)
stripped.addEventListener('click',insert)

buttonOne.addEventListener('click', insert)
buttonTwo.addEventListener('click', insert)
buttonThree.addEventListener('click', insert)
buttonFour.addEventListener('click', insert)
buttonFive.addEventListener('click', insert)
buttonSix.addEventListener('click', insert)
buttonSeven.addEventListener('click', insert)
buttonEigth.addEventListener('click', insert)
buttonNine.addEventListener('click', insert)
buttonZero.addEventListener('click', insert)

buttonCE.addEventListener('click', () => {
    display.value = ''
})
buttonResult.addEventListener('click', () => {
    display.value!==''? display.value = eval(display.value) : display.value = ''
})
degree.addEventListener('click',()=>display.value = Math.sqrt(eval(display.value)))

function insert() {
    display.value += this.textContent
}

