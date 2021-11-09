function geraTabuada(){
    var num = document.getElementById('txtValue')
    var tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        alert(`Digite o número para a tabuada ser gerada`)
    }else{
        numero = Number(num.value)
        tab.innerHTML = ''
        for(var i = 0; i <= 10; i++){
            var item = document.createElement(`option`)
            tabuada = numero * i
            item.text = `${numero} x ${i} = ${tabuada}`
            item.value = `tab${i}`
            tab.appendChild(item)
            
        }
    }

}