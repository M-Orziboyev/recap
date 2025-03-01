function loader(loaderWrap){
    const loaderWrapper = document.querySelector(loaderWrap)

    setTimeout(() => {
        loaderWrapper.style.display = 'none'
    }, 1500)
}

export default loader