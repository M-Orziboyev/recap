// Massive

const colors = ['red', 'blue', 'green', 'yellow', 'brown']

console.log(`Massive uzunligi: ${colors.length}`)
console.log(`Index yordamida element olish: ${colors[2]}`)
console.log(`Oxirigi elementni o'chiradi: ${colors.pop()}`)
console.log(`Oxiriga bitta yangi element qo'shadi ${colors.push('gray')}`)
// console.log(`Oldidagi elementni o'chiradi: ${colors.shift()}`)
// console.log(`Oldidan bitta yangi element qo'shadi ${colors.unshift('gray')}`)

//Pop va Push
//Pop --> bu massivni oxirigi elementini o'chiradi
//Push --> bu massivning oxiriga bitta yangi element qo'shadi
//Shift va Unshift
//Shift --> bu massivni oxirigi elementini o'chiradi
//Unshift --> bu massivning oxiriga bitta yangi element qo'shadi


console.log(colors)



const cars = ['BMW', 'Audi', 'Subaru', 'Suzuki', 'Mers']
//Iteration

// for (let i = 0; i < cars.length; i++){
//     console.log(cars[i])
// }

// for (let car of cars){
//     console.log(car)
// }

// colors.forEach((item, index, arr) => {
//     console.log(`${index}: ${item}`)
// })

const numbers = [12,45,23,55]

numbers.sort(compareFn)

function compareFn(a, b){
    return a - b
}

console.log(numbers)


