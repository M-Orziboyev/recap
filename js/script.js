//class

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greetings(){
        return `Here ${this.firstName} ${this.lastName}`
    }
}


class StatusPeople extends Person {
    constructor(firstName, lastName, isMarried) {
        super(firstName, lastName);
        this.isMarried = isMarried
    }
    get(){
        return `${this.firstName} ${this.lastName} Married: ${this.isMarried}`
    }
}
const firstPerson = new Person('Muzaffar', 'Orziboyev')
const secondPerson = new StatusPeople('Muzaffar', 'Orziboyev', false)
console.log(firstPerson.greetings())
console.log(secondPerson.get())

function logger (a, b, ...rest) {
    console.log(a)
    console.log(b)
    console.log(rest)
    return rest
}

console.log(logger(12, 10, 2,3,4,5,6,7,8,9,19))

const calc = (a, b = 2) => {
    return a + b
}
console.log(calc(1))
