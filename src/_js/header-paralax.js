// function paralax() {
//     var positionY
//     var banner = document.querySelector('.l-header')
//     positionY = window.scrollY

//     if (positionY <= 200) {
//         header.style.transform = "translateY(" + (-positionY / 5) + "px" + ")"
//         header.style.opacity = 1 - (positionY / 600)
//         console.log(positionY)
//     }
// }

// window.addEventListener('scroll', paralax)

function paralax() {
    var positionY
    var banner = document.querySelector('.c-banner')
    var bannerHeight = banner.clientHeight
    var positionY = window.scrollY
        // console.log(bannerHeight, positionY)

    // banner.style.height = (250 - (bannerHeight)) + "px"
    if (positionY <= bannerHeight) {
        // banner.style.height = (bannerHeight - positionY / 6) + "px"
        banner.style.transform = "translateY(" + (-positionY / (bannerHeight / 100)) + "px" + ")"
        banner.style.opacity = 1 - (positionY / bannerHeight)
    }
    // banner.style.opacity = 1 - (bannerHeight / 300)
    // console.log(bannerHeight)

}

window.addEventListener('scroll', paralax)