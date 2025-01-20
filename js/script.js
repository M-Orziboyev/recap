const person = {
    name: "Muzaffar",
    lastName: "Orziboyev",
    hobbies: {
        sport: 'UFC',
        games: 'Football'
    }
}



const clone = JSON.parse(JSON.stringify(person))

person.hobbies.sport = 'Box'

console.log(clone)
console.log(person)

// const objToJSON = JSON.stringify(person);
// const JSONtoObject = JSON.parse(objToJSON)
//
// console.log(objToJSON)
// console.log(JSONtoObject)