const status = 'success'

const request = new Promise((resolve, reject) => {
    if (status === 'success') {
        resolve()
    } else {
        reject(new Error)
    }
})


request
    .then(() => {
        console.log('Starting the new position')
    })
    .then(() => {
        console.log('Something really good happened')
    })
    .catch(() => {
        console.log('Something really bad happened')
    })
    .finally(() => {
        console.log('Anyway, you are muslim so say Alhamdulillah')
    })


const logger = time => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, time)
    })
}

// logger(1000).then(() => {
//     console.log('1000ms')
// })
// logger(2000).then(() => {
//     console.log('2000ms')
// })

Promise.all([logger(1000), logger(2000)]).then(() => {console.log('All promises was resolved')})
Promise.race([logger(1000), logger(2000)]).then(() => {console.log('All promises was resolved')})