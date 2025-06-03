const aboutDestination = document.querySelector(".about-destionation")
const destinationDistance = document.querySelector(".destination-distance")
const destinationDuration = document.querySelector(".destination-duration")
const destinationName = document.querySelector("#destination-name")
const destinationDescription = document.querySelector("#destination-description")
const distance = document.querySelector("#distance")
const duration = document.querySelector("#duration")
const destinationIamge = document.querySelector(".destination-img img")

//MOON
const moon = document.querySelector(".moon")
moon.addEventListener("click", displayMoon)

//MARS
const mars = document.querySelector(".mars")
mars.addEventListener("click", displayMars)

//EUROPA
const europa = document.querySelector(".europa")
europa.addEventListener("click", displayEuropa)

//TITAN
const titan = document.querySelector(".titan")
titan.addEventListener("click", displayTitan)


function displayMoon() {
    destinationName.textContent = "MOON"
    destinationDescription.textContent = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
    distance.textContent = "384,400 KM"
    duration.textContent = "3 DAYS"
    destinationIamge.src = "./assets/images/destination/image-moon.png"
    destinationIamge.setAttribute("alt", "image of the moon")
}

function displayMars() {
    destinationName.textContent = "MARS"
    destinationDescription.textContent = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
    distance.textContent = "225 MIL. KM"
    duration.textContent = "9 MONTHS"
    destinationIamge.src = "./assets/images/destination/image-mars.png"
    destinationIamge.setAttribute("alt", "image of mars")
}

function displayEuropa() {
    destinationName.textContent = "EUROPA"
    destinationDescription.textContent = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
    distance.textContent = "628 MIL. KM"
    duration.textContent = "3 YEARS"
    destinationIamge.src = "./assets/images/destination/image-europa.png"
    destinationIamge.setAttribute("alt", "image of europa")
}

function displayTitan() {
    destinationName.textContent = "TITAN"
    destinationDescription.textContent = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
    distance.textContent = "1.6 BIL. KM"
    duration.textContent = "7 YEARS"
    destinationIamge.src = "./assets/images/destination/image-titan.png"
    destinationIamge.setAttribute("alt", "image of titan")
}

const tablet = window.matchMedia("(min-width: 600px) and (max-width: 1200px)")
function tabletMedia(med) {
    if(med.matches) {
        document.body.classList.add("destination-tablet-bg")
    } else {
        document.body.classList.add("destination-dekstop-bg")
    }
}

tabletMedia(tablet)



//MOBILE
const hamIcon = document.querySelector(".ham-icon")
const menu = document.querySelector(".hamburger")
const container = document.querySelector(".destination-container")

hamIcon.addEventListener("click", () => {
    menu.classList.toggle("ham-active")
    container.classList.toggle("destination-container-active")

    if (container.classList.contains("destination-container-active")) {
        hamIcon.src = "./assets/images/shared/icon-close.svg"
    } else {
        hamIcon.src = "./assets/images/shared/icon-hamburger.svg"
    }
})

const mobile = window.matchMedia("(min-width: 360px) and (max-width: 480px)")
function mobileMedia(med) {
    if(med.matches) {
        document.body.classList.add("destination-mobile-bg")
    }
}

mobileMedia(mobile)