const sum = document.querySelector('#sum'),
    usd = document.querySelector('#usd');


sum.addEventListener('input', () => {
    const request = new XMLHttpRequest()

    request.open('GET', "./js/current.json")
    request.setRequestHeader('Content-Type', 'application/json')
    request.send()

    request.addEventListener('load', () => {
        if (request.status === 200) {
            console.log(request.response)
        }
    })
})