const btnMenu = document.querySelector('.js-btn-menu')
const dash01 = document.querySelector('.js-btn-menu__dash01')
const dash02 = document.querySelector('.js-btn-menu__dash02')
const dash03 = document.querySelector('.js-btn-menu__dash03')

btnMenu.addEventListener('click', function() {
    dash01.classList.toggle('is-click-dash01')
    dash02.classList.toggle('is-click-dash02')
    dash03.classList.toggle('is-click-dash03')
})



btnMenu.addEventListener('click', function() {
    const menu = document.querySelector('.c-menu__ul')
    const html = document.querySelector('html')
    menu.classList.toggle('crescer')
        // html.style.overflow = 'hidden'
    html.classList.toggle('overflow')
        // console.log('OK')
})