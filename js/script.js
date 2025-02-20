window.addEventListener('DOMContentLoaded', () => {
    const postWrapper = document.querySelector('.posts')

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    }).then(response => response.json())
        .then(data => {
            data.forEach((item, index) => {
                const postEl = document.createElement('div');
                postEl.classList.add('post')
                postEl.innerHTML += `
                <h4> <b>${index + 1}</b> ${item.title}</h4>
                <p>${item.body}</p>
              `
                postWrapper.append(postEl)
            })
        }).catch(() => {
        const error = document.createElement('div')
        error.classList.add('error')
        error.innerHTML = 'Something went wrong with the network connections'
        postWrapper.append(error)
    })

    const form = document.querySelector('form')

    form.addEventListener('submit', event => {
        event.preventDefault()

        const formData = new FormData(form)

        const object = {}
        formData.forEach((value, key) => {
            object[key] = value
        })

        const json = JSON.stringify(object)
        console.log(json)

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: json,
        }).then(res => res.json()).then(data => {
            form.reset()
            const postEl = document.createElement('div');
            postEl.classList.add('post')
            postEl.innerHTML += `
                    <h4> <b>${data.id}</b> ${data.title}</h4>
                    <p>${data.body}</p>
                  `
            postWrapper.append(postEl)
        }).catch(err => {
            console.log(err)
        })
    })
})











