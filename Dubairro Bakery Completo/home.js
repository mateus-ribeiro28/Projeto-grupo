var img = document.getElementById('img')
var hoje = new Date()
var diasemana = hoje.getDay()

switch(diasemana){
   case 0:
   console.log('domingo')
   break

   case 1:
   console.log('segunda')
   break

   case 2:
   console.log('terça')
   break

   case 3:
   console.log('quarta')
   img1.src = 'imagens/item1.jfif'
   img2.src = 'imagens/item2.jpeg'
   img3.src = 'imagens/item3.jpeg'
   img4.src = 'imagens/item4.jpg'
   
   break

   case 4:
   console.log('quinta')
   break

   case 5:
   console.log('sexta')
   break
   
   case 6:
   console.log('sabado')
   break
   }


   console.log=(diasemana)