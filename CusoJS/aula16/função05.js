/* o fatorial de um numero pode ser calculado usando outro numero fatorial:
exemplo
5! = 5*4*3*2*1 = 120 
é a mesma coisa que :
5*4! = 120 
pois sabemos que N! = N x (N - 1)! só não pode ser o 1 pois 1! = 1*/

// RECURSIVIDADE
function Fatorial(n){
    if(n == 1){
        return 1
    }else{
       return n* Fatorial(n-1) 
    }

}
console.log(Fatorial(5))