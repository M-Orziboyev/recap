const status = 'success'

const request = new Promise((resolve, reject) => {
    if (status === 'success') {
        resolve()
    } else {
        reject(new Error)
    }
})


// request
//     .then(() => {
//         console.log('Starting the new position')
//     })
//     .then(() => {
//         console.log('Something really good happened')
//     })
//     .catch(() => {
//         console.log('Something really bad happened')
//     })
//     .finally(() => {
//         console.log('Anyway, you are muslim so say Alhamdulillah')
//     })


// const logger = time => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve()
//         }, time)
//     })
// }
//
// // logger(1000).then(() => {
// //     console.log('1000ms')
// // })
// // logger(2000).then(() => {
// //     console.log('2000ms')
// // })
//
// Promise.all([logger(1000), logger(2000)]).then(() => {console.log('All promises was resolved')})
// Promise.race([logger(1000), logger(2000)]).then(() => {console.log('All promises was resolved')})

window.addEventListener('DOMContentLoaded', () => {
    const postWrapper = document.querySelector('.posts')

    fetch('https://jsonplaceholder.typicode.come/posts', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    }).then(response => response.json())
        .then(data => {
            data.forEach((item, index) => {
                const postEl = document.createElement('div');
                postEl.classList.add('post')
                postEl.innerHTML = `
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

})











