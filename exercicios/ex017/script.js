function verificar() {
    var dataAtual = new Date()
    var anoAtual = dataAtual.getFullYear() //fullYear pega os 4 digitos do ano
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(Number(fAno.value) > anoAtual || fAno.value.length == 0){
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else{
        var sex = document.getElementsByName('radsex')
        var idade = anoAtual - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(sex[0].checked){
            genero = 'Masculino'
            
                if (idade >= 0 && idade < 13){
                    img.setAttribute('src', 'fotos/foto-bebe-m.png')
                    

                }else if( idade < 21){
                    img.setAttribute('src', 'fotos/foto-jovem-m.png')
                   

                }else if ( idade < 50){
                    img.setAttribute('src', 'fotos/foto-adulto-m.png')
                    

                 } else{
                    img.setAttribute('src', 'fotos/foto-idoso-m.png')
                 }
            
        } else if(sex[1].checked){
            genero = 'Feminino'
            if (idade >= 0 && idade < 13){
                img.setAttribute('src', 'fotos/foto-bebe-f.png')
                

            }else if( idade < 21){
                img.setAttribute('src', 'fotos/foto-jovem-f.png')
               

            }else if ( idade < 50){
                img.setAttribute('src', 'fotos/foto-adulto-f.png')
                

             } else{
                img.setAttribute('src', 'fotos/foto-idoso-f.png')
             }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}