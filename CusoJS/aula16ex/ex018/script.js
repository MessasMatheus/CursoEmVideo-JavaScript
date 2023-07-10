let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isnumero(n){
    if(Number(n)>= 1 && Number(n)<= 100){
        return true
    }else{
        return false
    }
}

function inlista(n , l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
   if(isnumero(num.value) && !inlista(num.value, valores)) {
    //window.alert('Tudo Ok!!') Teste para ver se a lógica estaca funcionando
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `Valor ${num.value}, adicionado.`
    lista.appendChild(item)
    res.innerHTML = ''
   }else{
    window.alert('Valor inválido ou ja encontrado na lista!!')
   }
   num.value = ''
   num.focus()
}

function finalizar(){
   if(valores.length == 0){
    window.alert('Adicione Valores antes de Finalizar!')
   }else{
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    for(let pos in valores){
        soma += valores[pos]
        if(valores[pos]> maior)
            maior = valores[pos]
        if(valores[pos]< menor)
            menor = valores[pos]
    }
    media += soma/tot
    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados!</p>`
    res.innerHTML += `<p>O <strong>MAIOR</strong> valor informado é : ${maior}</p>`
    res.innerHTML += `<p>O <strong>MENOR</strong> valor informado é : ${menor}</p>`
    res.innerHTML += `<p>A <strong>SOMA</strong> de todos os Valores é: ${soma}</p>`
    res.innerHTML += `<p>A <strong>MÉDIA</strong> dos valores digitados é: ${media}</p>`
   }
}