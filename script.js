const tablet = window.matchMedia("(min-width: 600px) and (max-width: 1200px)")

function tabletMedia(med) {
    if (med.matches) {
        document.body.classList.add("tabBg")
    } else {
        document.body.classList.add("dekstopBg")
    }
}

tabletMedia(tablet)


const mobile = window.matchMedia("(min-width: 360px) and (max-width: 480px)")

function mobileMedia(med) {
    if (med.matches) {
        document.body.classList.add("mobilebg")
    }
}

mobileMedia(mobile)


const hamIcon = document.querySelector(".ham-icon")
const menu = document.querySelector(".hamburger")
const container = document.querySelector(".container")

hamIcon.addEventListener("click", () => {
    menu.classList.toggle("ham-active")
    container.classList.toggle("container-active")

    if (container.classList.contains("container-active")) {
        hamIcon.src = "./assets/images/shared/icon-close.svg"
    } else {
        hamIcon.src = "./assets/images/shared/icon-hamburger.svg"
    }
})