function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano) {
       window.alert('[ERRO] Verifique os Dados Digitados e Tente Novamente!') 
    }else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var Genero = ''
       var img = document.createElement("img")
       img.setAttribute('id', 'foto')
       if(fsex[0].checked) {
         Genero = 'Homem'
         if(idade >= 0 && idade < 3){
            //bebe menino
            img.setAttribute('src', '01bebemenino.png')
         }else if(idade >= 3 && idade < 13){
            //Criança menino
            img.setAttribute('src', '02criancamenino.png')
         }else if(idade >= 13 && idade < 18){
            //Adolecente menino
            img.setAttribute('src', '05adolecentehomem.png')
         }else if(idade >= 18 && idade < 50){
            //Adulto Jovem
            img.setAttribute('src', '06adultojovem.png')
         }else if(idade >= 50 && idade < 70){
            //Adulto Meia Idade
            img.setAttribute('src', '09adultomeiaidade.png')
         }else {
            //Idoso
            img.setAttribute('src', '11idoso.png')
         }
       } else if(fsex[1].checked) {
         Genero = "Mulher"
         if(idade >= 0 && idade < 3){
            //bebe Menina
            img.setAttribute('src', '00bebemenina.png')
         }else if(idade >= 3 && idade < 13){
            //Criança menina
            img.setAttribute('src', '03criancamenina.png')
         }else if(idade >= 13 && idade < 18){
            //Adolecente menina
            img.setAttribute('src', '04adolecentemulher.png')
         }else if(idade >= 18 && idade < 50){
            //Adulta Jovem
            img.setAttribute('src', '07adultajovem.png')
         }else if(idade >= 50 && idade < 70){
            //Adulta Meia Idade
            img.setAttribute('src', '08adultameiaidade.png')
         }else {
            //Idosa
            img.setAttribute('src', '10idosa.png')
         }
       } 
       res.style.textAlign = "center"
       res.innerHTML = `Detectamos ${Genero} com ${idade} anos.`
       res.appendChild(img)
    }
}