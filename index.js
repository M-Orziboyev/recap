function greetings (callback) {
    console.log('Hello guys');

    callback()
}
greetings(() => console.log('This is a arrow function'))