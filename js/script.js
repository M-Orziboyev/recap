window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabContents = document.querySelectorAll('.tab_content'),
        tabParents = document.querySelector('.tabheader__items')

    function hideTabContent() {
        tabContents.forEach(tabContent => {
            tabContent.style.display = 'none';
        })

        tabs.forEach(tab => {
            tab.classList.remove('tabheader__item_active');
        })
    }

    function showTabContent(index = 0) {
        tabContents[index].style.display = 'flex';
        tabs[index].classList.add('tabheader__item_active');
    }

    hideTabContent()
    showTabContent()

    tabParents.addEventListener('click', event => {
        const target = event.target

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((tab, index) => {
                if (target === tab) {
                    hideTabContent()
                    showTabContent(index)
                }
            })
        }
    })

})
