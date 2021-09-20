// let time = 3000,
//     currentImageIndex = 0,
//     imagens = document
//     .querySelectorAll(".js-banner img")
// max = imagens.length;
let time = 3000
let currentImageIndex = 0
let imagens = document.querySelectorAll(".js-banner img")
let max = imagens.length;


function nextImage() {

    imagens[currentImageIndex].classList.remove("selected")

    currentImageIndex++

    if (currentImageIndex >= max) {
        currentImageIndex = 0
    }

    imagens[currentImageIndex].classList.add("selected")
}

function start() {
    setInterval(() => {
        nextImage()
    }, time)
}

window.addEventListener("load", start)