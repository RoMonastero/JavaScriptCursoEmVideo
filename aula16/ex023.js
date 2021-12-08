function parimpar(num) {
    if (num%2 == 0) {
        return 'Par'
    } else {
        return ' Impar'
    }
}

function soma(n1 = 0, n2 = 0) {
    return n1 + n2
    
}

function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat*=c
        
    }

    return fat
    
}

function fatRecursivo(n) {
    if (n == 1) {
        return 1
    }else{
        return n * fatRecursivo(n-1)
    }
}

let res = parimpar(4)

console.log(res)

let resultado = soma(5)

console.log(resultado)

let v = function (x) {

    return x*2
    
}

console.log(v(2))

console.log(fatorial(5))
console.log(fatRecursivo(5))