function modal() {
    const modalOpenBtns = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalContent = document.querySelector('.modal__content')

   export function openModal() {
        modalContent.classList.add('modal_fade')
        modal.classList.add('show')
        modal.classList.remove('hide')
        document.body.style.overflow = 'hidden'
        clearInterval(modalTimerId)
    }

    export function closeModal() {
        modal.classList.add('hide')
        modal.classList.remove('show')
        document.body.style.overflow = ''
    }

    modalOpenBtns.forEach(btn => {
        btn.addEventListener('click', openModal)
    })

    modal.addEventListener('click', event => {
        if (
            event.target === modal ||
            event.target.getAttribute('data-modal-close') === ''
        ) {
            closeModal()
        }
    })

    document.addEventListener('keydown', event => {
        if (event.code === 'Escape' && modal.classList.contains('show')) {
            closeModal()
        }
    })

    const modalTimerId = setTimeout(openModal, 50000)

}

export default modal