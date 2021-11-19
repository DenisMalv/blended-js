/*/////////////////////////// ОБЬЕКТЫ \\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */

// обяьвление обьекта 
const object = {
    /*тело обьекта (key: value;) */
    prop_a: "a",
    prop_b: "b",
    prop_c: '2',
    name: 'sandra mal',
    age: 31,
    isOnline: true,
    isOfline: false,
    skills: ["html", "scc"],
    music: {
        bands: ['bi-2'],
        songs:['asda']
    },
    // методы обьекта :
    // -es5
    showName1: function () {
        console.log('hello')
    },
    // -es6
    showName2() {
        console.log('helloooo')
    },
}
// получение свойств  GET, READ
console.log(object.name)
console.log(object.age)
console.log(object.skills)
console.log(object.music.bands)
object.showName1()
object.showName2()

console.log(object['name']) /**по имени ключа строчному */
console.log(object['age']) /**по имени ключа строчному */

/**Изменение свойств в обьекте UPDAATE */
console.log(object.age)
object.age = 18
console.log(object.age)
// если свойство не обьявлено или его нет то выдет UNDEFINED
// можно добавить через (имя обьекта.ключ обьекта = значенияы) ADD, DELETE
// если имя ключа и переменная в значении имеют одинаковое имя можно записать скороченно.
// вычисляемые свойства:
let key1 = 'name'
let key2 = 'lastname'
let key3 = 'skills'
const nextUser = {
    [key1]: 'user1',
    [key2]: 'user2',
    [key3]: 'user3',
}
console.log(nextUser)

// перебор обьекта:
for (let i in nextUser) {
    console.log('key',i)
}
const product = {
    price:10,
}
console.log(product)
// Create{} 
const newProduct = Object.create(product)
console.log(newProduct)
// newProduct.price = 100
for (let key in newProduct) { /**даже если это свой ство у родителя и выше то фор ин его найдет. */
    console.log(key)
    console.log(newProduct[key])
}
// методы обьектов:
/**product.hasOwnProperties('имя ключа')
 * object.keys(product)
 * object.values(product)
 * object.entries(product) - вернет многомерный массив.
 */

