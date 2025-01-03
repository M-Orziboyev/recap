const box = document.querySelector('.box'),
    button = document.querySelectorAll('button'),
    circles = document.querySelectorAll('circle');

for (let i = 0; i < circles.length; i++) {
    circles[i].style.borderRadius = '0';
}
button.forEach((item) => {
    item.style.borderRadius = '100%'
    item.style.backgroundColor = '#aac';
})