let valores = [8,1,7,4,2,9]


/*console.log(valores)
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])*/

valores.sort()

/*for(let Pos=0; Pos<valores.length; Pos++){
    console.log(`A posição ${Pos}, tem o valor = ${valores[Pos]}`)
}*/

for(let pos in valores){ 
    console.log(`A posição ${pos}, tem o valor = ${valores[pos]}`) 
}
valores.indexOf(7)