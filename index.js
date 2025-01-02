// Object va destructor

const person = {
    name: 'Muffy',
    age: '17',
    job: 'Software Engineer',
    hobbies: {
        sport: 'football',
        games: 'UFC'
    }
}
// How to know length of our object

console.log(Object.keys(person).length)

// for in --> objectlar uchun
//for of --> array va massivlar uchun

for( let key in person){
    if(typeof person[key] === 'object'){
        for (let i in person[key]){
            console.log(`Property ${i}: value ${person[key][i]}`)
        }
    }else{
        console.log(`Property ${key}: value ${person[key]}`)
    }
}