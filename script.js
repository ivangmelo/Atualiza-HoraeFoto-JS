function carregar () {

    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    tempo = setInterval(carregar, 2000)
    //var hora = data.toLocaleTimeString() convert para texto o horário
    //var hora = 8 para textar manualmente
    msg.innerHTML = `Agora são ${hora}:${minuto} horas`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = "imgs/foto-manha.jpg"
        document.body.style.background = '#7f7fad'
    }else if (hora >= 12 && hora <= 18) {
        //tarde
        img.src = "imgs/foto-tarde.jpg"
        document.body.style.background = '#0B243B'
    } else {
        //noite
        img.src = "imgs/foto-noite.jpg"
        document.body.style.background = '#071914'
    }

}

