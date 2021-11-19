// /////////////////////////////// FUNCTION \\\\\\\\\\\\\\\\\\\\\\\\\\\\
//создание функции

// ==========   выражение  Func exp - нельзя вызвать до обьявления
const funcExp = function (paramExp) {
    console.log(paramExp)
}
funcExp('Func exp')
funcExp(funcExp) /*callback саомй себя этой же функции*/ 

// =========   декларатив func decl - можно вызвать до обьявления
function funcDecl(paramDecl) {
    console.log(paramDecl)
}
funcDecl('func decl')
funcDecl(funcDecl) /*callback саомй себя этой же функции*/
funcDecl(funcExp) /*callback другой функции*/

// ===========   стрелочная функции Arrow - нельзя вызвать до обьявления
const arrowFunc = (paramArrow) => {
    console.log(paramArrow)
}
arrowFunc('arrow')
arrowFunc(arrowFunc)

//--------------- param & arguments
function hello(name) {
    console.log(`say hello ${name}`)
}
hello('alex')

//--------------- default params
function deffhello(name = 'john') {
    console.log(`say hello ${name}`)
}
deffhello()
//--------------- arguments & ...args
function gethello() {
    console.log(arguments) /*в аргументс массив - недомасив нельзя пушить слайсить и тд. */
    for (let elem of arguments) {
        console.log(elem)
    }
    /*преобразование псевдомассива в массив !!!!!!!!!!!!!!!!!!!*/
    const myArgs = Array.from(arguments)
    console.log(myArgs)
}
gethello(1, 2, 3)

const gethelloArrow = (...params) => {
    console.log(params) /*в стрелках нет недомассива аргументс, потмоу используют распыление.(... - rest) */
}
gethelloArrow(1, 2, 3, 4, 5)


