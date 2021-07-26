const div = document.getElementById('menu')
const bars = document.getElementById('open')
const close = document.getElementById('close')
const nav = document.getElementById('nav')
console.log(bars)
div.addEventListener('click', () => {
    bars.classList.toggle('d-none');
    close.classList.toggle('d-none');
    nav.classList.toggle('active')
})