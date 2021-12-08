let num = document.getElementById('txtValue')
let lista = document.getElementById('numeros')
let res = document.getElementById('res')
let valores = []

function adicionarNumero() {
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ``
    }else{
        alert("Valor invalido ou ja encontrado na lista")
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if(valores.length == 0){
        alert('Nenhum elemento adicionado')
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }

        media = soma/valores.length

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} numeros cadastrados</p>`
        res.innerHTML += `<p>O maior é ${maior}</p>`
        res.innerHTML += `<p>O menor é ${menor}</p>`
        res.innerHTML += `<p>A soma é ${soma}</p>`
        res.innerHTML += `<p>A media é ${media}</p>`
    }
}

function isNumero(num) {
    if(Number(num) >= 1 && Number(num) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(num, lista) {
    if(lista.indexOf(Number(num)) == -1){
        return false
    }else{
        return true
    }
}