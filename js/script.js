window.addEventListener('DOMContentLoaded', () => {
    // Tabs

    const tabs = document.querySelectorAll('.tabheader__item'),
        tabContents = document.querySelectorAll('.tab_content'),
        tabParents = document.querySelector('.tabheader__items')

    function hideTabContents() {
        tabContents.forEach(tabContent => {
            tabContent.classList.add('hide')
            tabContent.classList.remove('show')
        })

        tabs.forEach(tab => {
            tab.classList.remove('tabheader__item_active')
        })
    }

    function showTabContent(index = 0) {
        tabContents[index].classList.add('show', 'fade')
        tabContents[index].classList.remove('hide')
        tabs[index].classList.add('tabheader__item_active')
    }

    hideTabContents()
    showTabContent()

    tabParents.addEventListener('click', event => {
        const target = event.target

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((tab, index) => {
                if (target === tab) {
                    hideTabContents()
                    showTabContent(index)
                }
            })
        }
    })

    // Loader

    const loaderWrapper = document.querySelector('.loader-wrapper')

    setTimeout(() => {
        loaderWrapper.style.display = 'none'
    }, 1500)

    // Timer

    const deadline = '2024-02-01'

    function getTimeRemaining(endtime) {
        let days, hours, minutes, seconds
        const time = Date.parse(endtime) - Date.parse(new Date())

        if (time <= 0) {
            days = 0
            hours = 0
            minutes = 0
            seconds = 0
        } else {
            days = Math.floor(time / (1000 * 60 * 60 * 24)),
                hours = Math.floor((time / (1000 * 60 * 60)) % 24),
                minutes = Math.floor((time / (1000 * 60)) % 60),
                seconds = Math.floor((time / 1000) % 60)
        }

        return {
            totalTime: time,
            days,
            hours,
            minutes,
            seconds,
        }
    }

    function formatNumber(number) {
        if (number >= 0 && number < 10) {
            return `0${number}`
        } else {
            return number
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000)

        updateClock()

        function updateClock() {
            const time = getTimeRemaining(endtime)

            days.textContent = formatNumber(time.days)
            hours.textContent = formatNumber(time.hours)
            minutes.textContent = formatNumber(time.minutes)
            seconds.textContent = formatNumber(time.seconds)

            if (time.totalTime <= 0) {
                clearInterval(timeInterval)
            }
        }
    }

    setClock('.timer', deadline)

    // Modal

    const modalOpenBtns = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector(".modal"),
        modalCloseBtn = document.querySelector("[data-modal-close]"),
        modalContent = document.querySelector(".modal__content")

    function openModal() {
        modalContent.classList.add("modal_fade")
        modal.classList.add("show")
        modal.classList.remove("hide")
        document.body.style.overflow = "hidden"
        clearInterval(modalTimerId)
    }

    function closeModal() {
        modal.classList.add("hide")
        modal.classList.remove("show")
        document.body.style.overflow = ""
    }

    modalOpenBtns.forEach(btn => {
        btn.addEventListener("click", openModal)
    })

    modalCloseBtn.addEventListener("click", closeModal)

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal()
        }
    })

    document.addEventListener("keydown", (event) => {
        if (event.code === "Escape" && modal.classList.contains("show")) {
            closeModal()
        }
    })

    const modalTimerId = setTimeout(openModal, 5000)

    // Class


    class OfferMenu {
        constructor(src, alt, title, descr, discount, sell, parentOffer) {
            this.src = src
            this.alt = alt
            this.title = title
            this.descr = descr
            this.discount = discount
            this.sell = sell
            this.parent = document.querySelector(parentOffer)
        }


        render() {
            const element = document.createElement('div')
            element.innerHTML = `
                <img src="${this.src}" alt="${this.alt}">
                <div>
                  <h3>${this.title}</h3>
                  <p>${this.descr}</p>
                  <p><del>${this.discount}</del> <span class="primary-text">${this.sell}</span></p>
                </div>
            `

            this.parent.append(element)
        }
    }

    const offers = [
        {
            src: "./img/offer1.png",
            alt: "Quattro Pasta",
            title: "Quattro Pasta",
            descr: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quibusdam.",
            discount: 55,
            sale: 20,
        },
        {
            src: "./img/offer2.png",
            alt: "Vegertarian Pasta",
            title: "Vegertarian Pasta",
            descr: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quibusdam.",
            discount: 75,
            sale: 25,
        },
        {
            src: "./img/offer3.png",
            alt: "Gluten-Free Pasta",
            title: "Gluten-Free Pasta",
            descr: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quibusdam.",
            discount: 25,
            sale: 15,
        }
    ]

    offers.forEach(offer => {
        const {src, alt, descr, discount, sale, title} = offer
        new OfferMenu(src, alt, title, descr, discount, sale, ".offers-items").render()
    })
})

class DayTimeItems {
    constructor(src, alt, title, desc, specialTimes) {
        this.src = src
        this.alt = alt
        this.title = title
        this.descr = desc
        this.spItems = document.querySelector(specialTimes)
    }

    render() {
        const element = document.querySelector('div')
        element.classList.add('daytime-item')
        element.innerHTML = `
          <img src="${this.src}" alt="${this.alt}">
          <h3>${this.title}</h3>
          <p>${this.descr}</p>
        `
        this.spItems.append(element)
    }
}

const items = [
    {
        src: "./img/breckfastIcon.png",
        alt: "Breakfast",
        title: "Breakfast",
        desc: "8:00 am to 10:00 am"
    },
    {
        src: "./img/lunchIcon.png",
        alt: "Lunch",
        title: "Lunch",
        desc: "4:00 pm to 7:00 pm"
    },
    {
        src: "./img/dinnerIcon.png",
        alt: "Dinner",
        title: "Dinner",
        desc: "9:00 pm to 1:00 Am"
    },
    {
        src: "./img/dessertIcon.png",
        alt: "Dessert",
        title: "Dessert",
        desc: "All day"
    },
]


items.forEach(stuff => {
    const {src, alt, title, desc} = stuff;
    new DayTimeItems(src, alt, title, desc, '.daytime-items').render()
})