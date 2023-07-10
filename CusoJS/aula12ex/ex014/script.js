function carregar(){
   var msg = window.document.getElementById('msg')
   var img = window.document.getElementById('imagem') 
   var data = new Date()
   var hora = 8//data.getHours()
   msg.innerHTML = `Agora São ${hora} Horas`
    if (hora >= 6 && hora < 12){
        img.src = 'manha.png'
        document.body.style.background = '#ffcda0'
    } else if(hora >= 12 && hora < 18){
        img.src = 'tarde.png'
        document.body.style.background = '#0083cb'
        
      } else if (hora >= 18 && hora <= 23) {
            img.src = 'noite.png'
            document.body.style.background = '#000440'
        } else {
            img.src = 'madrugada.png'
            document.body.style.background = '#040404'
          }
}