window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabContents = document.querySelectorAll('.tab_content'),
        tabParents = document.querySelector('.tabheader__items');

    function hideContent() {
        tabContents.forEach(content => {
            content.classList.add('hide')
            content.classList.remove('show')
        })

        tabs.forEach(tab => {
            tab.classList.remove('tabheader__item_active')
        })
    }

    function showContent(index = 0) {
        tabContents[index].classList.add('show', 'fade')
        tabContents[index].classList.remove('hide')
        tabs[index].classList.add('tabheader__item_active')
    }

    hideContent()
    showContent()

    tabParents.addEventListener('click', () => {
        const target = event.target
        if (target && target.classList.contains('tabheader__item')){
            tabs.forEach((tab, index) => {
                if (tab === target){
                    hideContent()
                    showContent(index)
                }
            })
        }
    })
})