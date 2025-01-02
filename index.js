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

// const secondPerson = { ...person }
//
// secondPerson.name = 'Muffy'
// secondPerson.age = 18
//
// console.log(person)
// console.log(secondPerson)

//Arraylarni clonlash
//#1. Slice methodi yordamida

const cars = ['BMW', "Hyundai", "Porch"]
// const scars = cars.slice()
// scars.push('Suzuki')
// console.log(cars)
// console.log(scars)

// #2 Spread operatori yordamida ES8
// const copy = [...cars]
// copy.push('Subaru')
//
// console.log(copy)

// function log(a,b,c){
//     console.log('First', a)
//     console.log('Second', b)
//     console.log('Third', c)
// }
//
// const arr = [1,2,3]
//
// log(...arr)