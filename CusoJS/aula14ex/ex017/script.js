function calcular(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0){
        window.alert('[ERRO] Complete a lacuna para Calcular!!') 
    } else {
        let n = Number(num.value)
        let C=1
        tab.innerHTML = " "
        while (C<=10){
            let item = document.createElement('option')
            item.text = `${n} * ${C} = ${n*C}`
            item.value = `tab ${C}`
            tab.appendChild(item)
            C++
        }
    }
    
}