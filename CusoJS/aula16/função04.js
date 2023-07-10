//Calcular um fatorial de um numero
//ex. 5! = 5 * 4 * 3 * 2 * 1 = 120

function Fatorial(n){
    let fat = 1
    for(let c = n; c>1; c--){
        fat *= c
    }
    return fat
}

console.log(Fatorial(4))