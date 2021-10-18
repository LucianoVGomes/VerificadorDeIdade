function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.getElementById('res')
   if (fano.value.length == 0 || fano.value > ano) {
       window.alert('[ERROR]Verifique os Dados e tente novamente!')
   }
   else {
      var fsex = document.getElementsByName('radsex')
      var idade = ano - Number(fano.value)
      var genero = ''
      var img = window.document.getElementById('imagem')
      
      if (fsex[0].checked) {
          genero = 'Homem'
          if (idade >= 0 && idade < 10) {
              //criança
            img.src = 'criancam.png'
          }
          else if (idade <= 21) {
              //Jovem
              img.src = 'jovemm.png'
          }
          else if (idade < 50) {
              //Adulto
              img.src = 'adultom.png'
          }
          else {
              //Idoso
              img.src = 'idoso.png'
          }
      }
      else if (fsex[1].checked) {
          genero = 'Mulher'
          if (idade >= 0 && idade < 10) {
            //criança
            img.src = 'criancaf.png'
        }
        else if (idade < 21) {
            //Jovem
            img.src = 'jovemf.png'
        }
        else if (idade < 50) {
            //Adulto
            img.src = 'adultaf.png'
        }
        else {
            //Idoso
            img.src = 'idosa.png'
        }
      }
      res.style.textAlign = 'center'
      res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
      res.appendChild(img)
   }
}