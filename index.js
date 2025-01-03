const ads = document.querySelector('.promo__adv')
const genre = document.querySelector('.promo__genre')
const background = document.querySelector('.promo__bg')
const seriesList = document.querySelector('.promo__interactive-list')

ads.remove()

genre.innerHTML = '<p>Comedy</p>'

background.style.background = `url(\'../img/1.jpg\')`


const seriesDB = {
    series: [
        "OMAR",
        "The Final Legacy",
        "ERTUGRUL",
        "MAGNIFICENT CENTURY",
        "GREAT SELJUKS: GUARDIANS..."
    ]
}
seriesList.innerHTML = '';

seriesDB.series.forEach((item, index) => {
    seriesList.innerHTML += `
    <li class="promo__interactive-item">
                        ${index + 1} ${item}
                        <div class="delete"></div>
     </li>
    `
})
