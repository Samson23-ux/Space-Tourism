const techNumber = document.querySelectorAll(".tech-number p")
const techName = document.querySelector(".tech-name")
const techDescription = document.querySelector(".tech-description")
const techTabImage = document.querySelector(".tech-item2-tablet img")
const techDekstopImg = document.querySelector(".tech-item2-dekstop img")


//TABLET
const tablet = window.matchMedia("(min-width: 600px) and (max-width: 1200px)")
tabletMedia(tablet)


function tabletMedia(med) {
    if (med.matches) {
        document.body.classList.add("tech-tablet-bg")
        return true
    } else {
        document.body.classList.add("tech-dekstop-bg")
        return false
    }
}

function toggleTechImage(img) {
    if (img.matches) {
        return true
    }
}


//MOBILE
const hamIcon = document.querySelector(".ham-icon")
const menu = document.querySelector(".hamburger")
const container = document.querySelector(".tech-container")
const mobile = window.matchMedia("(min-width: 360px) and (max-width: 480px)")

hamIcon.addEventListener("click", () => {
    menu.classList.toggle("ham-active")
    container.classList.toggle("tech-container-active")

    if (container.classList.contains("tech-container-active")) {
        hamIcon.src = "./assets/images/shared/icon-close.svg"
    } else {
        hamIcon.src = "./assets/images/shared/icon-hamburger.svg"
    }
})

function mobileImage(img) {
    if(img.matches) {
        return true
    }
}

for (let i = 0; i < techNumber.length; i++) {
    if (i === 0) {
        techNumber[i].addEventListener("click", () => {
            techName.textContent = "LAUNCH VEHICLE"
            techDescription.textContent = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
            techDekstopImg.src = "./assets/images/technology/image-launch-vehicle-portrait.jpg"

            if (toggleTechImage(tablet) === true || mobileImage(mobile)) {
                techTabImage.src = "./assets/images/technology/image-launch-vehicle-landscape.jpg"
            }
        })
    } else if (i === 1) {
        techNumber[i].addEventListener("click", () => {
            techName.textContent = "SPACEPORT"
            techDescription.textContent = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
            techDekstopImg.src = "./assets/images/technology/image-space-capsule-portrait.jpg"

            if (toggleTechImage(tablet) === true || mobileImage(mobile)) {
                techTabImage.src = "./assets/images/technology/image-space-capsule-landscape.jpg"
            }
        })
    } else if (i === 2) {
        techNumber[2].addEventListener("click", () => {
            techName.textContent = "SPACE CAPSULE"
            techDescription.textContent = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
            techDekstopImg.src = "./assets/images/technology/image-spaceport-portrait.jpg"

            if (toggleTechImage(tablet) === true || mobileImage(mobile)) {
                techTabImage.src = "./assets/images/technology/image-spaceport-landscape.jpg"
            }
        })
    }
}