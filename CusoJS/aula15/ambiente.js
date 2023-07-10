//var num = []
let num = [5,2,8,9,3]

num [3] = 6 // adiciona o numero na posição 3, se não houver essa posição ele cria.
num.push(7) // coloca um novo elemento na ultima posição.
num.sort() // coloca todos os elementos do array em ordem crescente.
//num.length - mostra o tamanho do vetor. começando sempre do 0.

console.log (`O vetor tem ${num.length} posições.`)
console.log(`O primeiro elemento do vetor é ${num[0]}`)
console.log (`Nosso Vetor é o = ${num}`) 

for(let Pos = 0; Pos<num.length; Pos++){
    console.log(num[Pos])
}
let Pos = num.indexOf(8) // mostra em que posição está o numero
if(Pos == -1){
    console.log('O valor não foi encontrado')
}else{
   console.log(`A posição do numero é : ${Pos}`) 
}

