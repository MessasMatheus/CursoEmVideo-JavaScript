function contar() {
    //Usar Let ou Var é a mesma coisa, Ambas são denominações de Variaveis.
    let ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(ini.value.length==0 || fim.value.length==0 || passo.value.length==0) {
        res.innerHTML = 'Impossivel Contar!!!'
        //window.alert('[ERRO] Digite todos os Campos antes de Continuar!!')
    } else {
       res.innerHTML = 'Contando : <br>'
       let i = Number(ini.value) 
       let f = Number(fim.value)
       let p = Number(passo.value) 
    if (p <=0 ){
        window.alert('Passo Inválido!! Considerando Passo 1')
        p=1
    }    
    if(i<f){
        //Contagem Crescente
        for(var c = i; c<=f; c+=p){
            res.innerHTML += ` ${c} \u{25B6} `
        }
    } else {
        //Contagem Regressiva
        for(var c = i; c>=f; c-=p){
            res.innerHTML += ` ${c} \u{25B6} `
        }
    } 
       res.innerHTML += `\u{1F38C}`
    }
}