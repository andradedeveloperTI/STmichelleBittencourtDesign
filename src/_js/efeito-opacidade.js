// EFEITO NA OPACIDADE DOS ELEMENTOS
// 
// primeiro diminuo a opacidade dos elementos se baseando na proporção do elemento em relação a tela
// essa primeira função é carregada no load da página para preprarar os elementos
// 
// a segunda função é ativada na rolagem do mouse, que adiciona a classe "opacidade1" nos elementos 
// essa função adiciona opacidade máxima aos elementos e também adiciona um transition na opacidade

function menosOpacidade() {
    var obj = document.querySelectorAll('.js-efeito-op .js-item-op')
    var alturaJanela = window.innerHeight

    obj.forEach(e => {
        if ((e.getBoundingClientRect().top + 150) > (alturaJanela)) {
            e.style.opacity = .5
        }
    })
}

window.addEventListener('load', menosOpacidade)

function maisOpacidade() {
    var imgs = document.querySelectorAll('.js-efeito-op .js-item-op')
    var alturaWindow = window.innerHeight

    imgs.forEach(e => {
        if ((e.getBoundingClientRect().top + 150) < (alturaWindow)) {
            e.classList.add('opacidade1')
        }
    })
}

window.addEventListener('scroll', maisOpacidade)