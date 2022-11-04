function carregar() {

    var msg = document.getElementById('msg')
    var img = document.getElementById('image')
    var data = new Date()
    var hora = data.getHours()
    var mts = data.getMinutes()
    var date = data.getDate()
    var dia = data.getDay()
    
    if (dia == 0) {
        dia = 'Domingo'
    } else if (dia == 1) {
        dia = 'Segunda-feira'
    } else if (dia == 2) {
        dia = 'Terça-feira'
    } else if (dia == 3) {
        dia = 'Quarta-feira'
    } else if (dia == 4) {
        dia = 'Quinta-feira'
    } else {
        dia = 'Sexta-feira'
    }
        
    msg.innerHTML = `<b>Agora são ${hora}:${mts}
    Minutos </b> ${dia} Dia <b> ${date}`
    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.png'
        document.body.style.background = '#b1a119dc'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'fototarde.png'
        document.body.style.background = '#399fbe'
    } else {
        img.src = 'fotonoite.png'
        document.body.style.background = '#0000009f'
    }
}