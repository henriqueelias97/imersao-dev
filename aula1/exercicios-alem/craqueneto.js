var n1 = document.getElementById("n1")
var n2 = document.getElementById("n2")
var res1 = document.getElementById("res1")
var res = document.getElementById("res2")

// = () => {} - Arrowfunction - permitem ter um retorno implícito,
// que são valores retornados sem ter que usar a palavar return. 
// O conceito de funcionamento do this pode variar dependendo do contexto e do modo como o 
// JavaScript esta sendo usado (modo strict ou não) - Também conhecida como função de callback

const calculaMedia = () => {
  var media = (Number(n2.value) / Number(n1.value))
  res1.innerHTML = `Sua média foi ${media.toFixed(2)}`
  if (media < 0.5){
    res.innerHTML = `Pé de rato`
  } else if (0.5 >= media || media <= 1.0) {
    res.innerHTML = `Esse é baum`
  } else {
    res.innerHTML = 'Craque!'
  } 
}
    
const reset = () => {
  n1.value = ''
  n2.value = ''
  res1.innerHTML = ''
  res.innerHTML = ''
}
