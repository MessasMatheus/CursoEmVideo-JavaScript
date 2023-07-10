function parImpar(num){
    if(num % 2 == 0){
        return "O número é Par"
    } else {
        return "O número é Impar"
    }
}

//console.log(parImpar(223)), não nescessariamente você precisa criar uma variavel.
let res = parImpar (8)
console.log(res)