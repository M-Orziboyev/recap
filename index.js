const ads = document.querySelector('.promo__adv')
const genre = document.querySelector('.promo__genre')
const background = document.querySelector('.promo__bg')
const series = document.querySelectorAll('li')
const copySeries = []

ads.remove()

genre.innerHTML = '<p>Comedy</p>'

background.style.background = `url(\'../img/1.jpg\') center center/cover no-repeat`


// series.forEach((item, index) => {
//     copySeries.push(`${index}: ${item}`)
// })
//
// console.log(copySeries)

for (let i = 0; i < series.length; i++) {
    copySeries.push(`${i}: ${series[i]}`)
}

console.log(copySeries)