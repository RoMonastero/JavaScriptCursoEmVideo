function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var dataAtual = new Date()
    var horaAtual = dataAtual.getHours()
    
    msg.innerHTML = `Agora são ${horaAtual} horas`

    if (horaAtual >= 0 && horaAtual < 12) {
        img.src = "fotos/manha.jpg"
        document.body.style.background = '#e2cd9f'
    } else if(horaAtual <= 18){
        img.src = "fotos/tarde.jpg"
        document.body.style.background = '#b9846f'
    }else{
        img.src = "fotos/noite.jpg"
        document.body.style.background = '#515154'
    }
    
}