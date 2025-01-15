// Context this

// function showThis() {
// 	console.log(this)
// }


// showThis()

// const person = {
// 	firstName: "Samar",
// 	lastName: "Badriddinov",
// 	greeting: function() {
// 		const showThis = () => {
// 			console.log(this)
// 		}
// 		showThis()
// 		console.log(this)
// 	}
// }

// person.greeting()

// function Person(firstName, lastName) {
// 	this.firstName = firstName
// 	this.lastName = lastName
// 	this.isHuman = true
// 	this.greeting = () => {
// 		console.log(this)
// 	}
// }

// const firstPerson = new Person("Abdulloh", "Mahmud")

// console.log(firstPerson.greeting())

// function greeting(isMarried) {
// 	console.log(this.name + "Married: " + isMarried)
// }

// const person = {
// 	name: "Samar Badriddinov"
// }

// greeting.call(person, true)
// greeting.apply(person, [false])

// function calc(number) {
// 	return this*number
// }

// const double = calc.bind(2)
// const trouble = calc.bind(3)

// console.log(double(12))
// console.log(double(24))

// console.log(trouble(15))
// console.log(trouble(30))

// #1. Oddiy functiondagi context this window obyektga teng, qat'iy rejim ishlasa undefined
// #2. Kontext obyektlardagi method - obyektga teng,
//     Arrow functiondagi context this - uni yuqoridagi contextga osilib oladi
// #3. Context this function constructorni ichida - yangi obyektni ekzemplyar
// #4. Call, Apply va Bind methodlar bu functionga context bog'lash

// const btn = document.querySelector("button")

// btn.addEventListener("click", function(evt) {
// 	evt.target.style.background = "red"
// })