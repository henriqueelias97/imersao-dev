function displaynum (n1) {
    if (n1 === '='){
        // Calculator.text1.value é igual uma expressão aritmética
        // O método eval() do JavaScript recebe uma expressão aritmética como argumento
        // na linha 7 eu recebo como valor do input 'text1' o resultado da expressão aritmética
        // salva no valor do input antes da operação.
        Calculator.text1.value = eval(Calculator.text1.value);
    } else {
        Calculator.text1.value = Calculator.text1.value + n1;
    }
}

function reload () {
    Calculator.text1.value = '';
}