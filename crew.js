const slider = document.querySelector('.slider-wrapper');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.intersectionRatio >= 0.97) {
            entry.target.focus()
        }
    })
}, {
    threshold: 0.97
})
observer.observe(slider)

const sliderNav = document.querySelectorAll(".slider-nav a");
let currentSlide = 0;

slider.addEventListener("keydown", (e) => {
    sliderNav[currentSlide].style.backgroundColor = "white"

    if (e.key === "ArrowRight") {
        currentSlide++

        if (currentSlide >= sliderNav.length) {
            currentSlide = sliderNav.length - 1;
            sliderNav[currentSlide].style.backgroundColor = "rgba(30, 36, 51, 0.8)"
            return
        }

    } else if (e.key === "ArrowLeft") {
        currentSlide--

        if (currentSlide < 0) {
            currentSlide = 0;
            sliderNav[currentSlide].style.backgroundColor = "rgba(30, 36, 51, 0.8)"
            return
        }
    }

    sliderNav[currentSlide].style.backgroundColor = "rgba(30, 36, 51, 0.8)"
})





const tablet = window.matchMedia("(min-width: 600px) and (max-width: 1200px)")
function tabletMedia(med) {
    if (med.matches) {
        document.body.classList.add("crew-tablet-bg")
    } else {
        document.body.classList.add("crew-dekstop-bg")
    }
}

tabletMedia(tablet)


//MOBILE
const mobile = window.matchMedia("(min-width: 360px) and (max-width: 480px)")

function mobileMedia(med) {
    if (med.matches) {
        document.body.classList.add("crew-mobilebg")

        new Swiper('.crew-container', {
            loop: true,

            pagination: {
                el: '.slider-nav'
            }
        })
    }
}

mobileMedia(mobile)



const hamIcon = document.querySelector(".ham-icon")
const menu = document.querySelector(".hamburger")
const container = document.querySelector(".crew-container")

hamIcon.addEventListener("click", () => {
    menu.classList.toggle("ham-active")
    container.classList.toggle("crew-container-active")

    if (container.classList.contains("crew-container-active")) {
        hamIcon.src = "./assets/images/shared/icon-close.svg"
    } else {
        hamIcon.src = "./assets/images/shared/icon-hamburger.svg"
    }
})
