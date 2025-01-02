const person = {
    name: 'John',
    age: '33',
    hobbies: {
        sport: 'Football',
        games: 'UFC'
    }
}

// #1 Iteration
// const copyObject = obj => {
//     const clone = {}
//
//     for (let key in obj){
//         clone[key] = obj[key]
//     }
//     return  clone
// }
//
// const sample = copyObject(person)
// sample.name = 'Muffy'
// sample.age = 18
// console.log(person)
// console.log(sample)

// #2 Object.assign() yordamida

// const secondPerson = Object.assign({isMarried:false}, person)
//
// secondPerson.name = 'Muffy'
// secondPerson.age = 18
//
// console.log(person)
// console.log(secondPerson)

// #3 Spread operatori yordamida iteratsiya. Bu ES8 da paydo bo'lgan javascriptda

const secondPerson = { ...person }

secondPerson.name = 'Muffy'
secondPerson.age = 18

console.log(person)
console.log(secondPerson)