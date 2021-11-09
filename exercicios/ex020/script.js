function contar(){
    var ini = document.getElementById("txtI")
    var fim = document.getElementById("txtF")
    var passo = document.getElementById("txtP")
    var res = document.getElementById("res")

    if(ini.value.length == 0 || fim.value.length == 0){
       alert(`[Erro] Faltam dados!`) 
    }else{
        if (passo.value.length == 0) {
            alert(`Não foi definido os passos! Considerarei como valendo 1`)
            passo.value = 1
        }
        res.innerHTML = `Contando: `
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        
        if(p < 0){
            p *= -1
            alert(`O campo Passo não pode ser negativo! Considerarei como valendo ${p}`)
        }else if(p == 0){
            alert(`O campo passos não pode ser 0! Considerarei como valendo 1`)
            p = 1
        }

        if (i > f) {
            for (let count = i; count >= f ; count -= p) {
                res.innerHTML += `${count} \u{1F449} `
                
            }
            res.innerHTML += `\u{1F3C1}`
        }else if(i < f){
            for (let count = i; count <= f ; count += p) {
                res.innerHTML += `${count} \u{1F449} `
                
            }
            res.innerHTML += `\u{1F3C1}`
        }else{
            res.innerHTML = `O início é igual ao final` 
        }
        
    }


}