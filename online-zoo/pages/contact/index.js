const hamburgerBtn = document.getElementById('header__hamburger--id')
const nav = document.querySelector('nav')
const hamburgerBtnExit = document.getElementById('header__hamburger-close--id')

hamburgerBtn.addEventListener('click', () => {
    nav.classList.toggle('show')
    console.dir(nav)
})

hamburgerBtnExit.addEventListener('click', () => {
    nav.classList.toggle('show')
})
