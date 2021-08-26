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

const openEls = document.querySelectorAll("[data-open]");
const isVisible = "is-visible";

for (const el of openEls) {
    el.addEventListener("click", function () {
        if (document.querySelector(".modal.is-visible")) {
            document.querySelector(".modal.is-visible").classList.remove(isVisible);
        }
        const modalId = this.dataset.open;
        document.getElementById(modalId).classList.add(isVisible);
    });
}

document.addEventListener("click", e => {
    if (e.target == document.querySelector(".modal.is-visible")) {
        document.querySelector(".modal.is-visible").classList.remove(isVisible);
    }
});

document.addEventListener("keyup", e => {
    if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
        document.querySelector(".modal.is-visible").classList.remove(isVisible);
    }
});

const closeEls = document.querySelectorAll("[data-close]");

for (const el of closeEls) {
    el.addEventListener("click", function () {
        this.parentElement.parentElement.parentElement.classList.remove(isVisible);
    });
}

const prices = document.querySelectorAll(".modal__btn")

for (const price of prices) {
    price.addEventListener("click", () => {
        if (price.classList.contains('active')) {
            price.classList.remove('active');
        } else
            price.classList.add('active');
    })
}

const restbtns = document.querySelectorAll(".modal__label1")

for (const btn of restbtns) {
    btn.addEventListener("click", () => {
        if (btn.classList.contains('active')) {
            btn.classList.remove('active');
        } else
            btn.classList.add('active');
    })
}