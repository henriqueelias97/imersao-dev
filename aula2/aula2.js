const Converter = () => {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
   
    var ValorEmReal = valorEmDolarNumerico * 5;
    console.log(ValorEmReal);

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = `O resultado em real é R$ ${ValorEmReal}`;
    elementoValorConvertido.innerHTML = valorConvertido;
    
 // Funções precisam receber uma operação, no caso desse function ele está 
// recebendo o Converter contido no HTML
// o get.ElementbyId tambem seleciona a partir de uma identificação realizada via HTML
    
}
