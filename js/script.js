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

