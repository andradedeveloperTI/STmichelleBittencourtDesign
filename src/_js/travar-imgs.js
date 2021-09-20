// ###############  REMOVER O CLICK DIREITO DAS IMAGENS  ##################
// ########################################################################

const travarBotaoDireitoImgs = Array.from(document.querySelectorAll('body img'))
travarBotaoDireitoImgs.forEach(e => {
    e.addEventListener('contextmenu', e => e.preventDefault())

})