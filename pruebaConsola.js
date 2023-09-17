function calculate(operacion, resultado, numero){
    let retorno = 0;
    switch(operacion){
        case '+':
            retorno = parseFloat(resultado) + parseFloat(numero);
            break;
        case '-':
            retorno = parseFloat(resultado) - parseFloat(numero);
            break;
        case '*':
            retorno = parseFloat(resultado) * parseFloat(numero);
            break;
        case '/':
            if(numero == 0){
                retorno = 'error';
            } else {
                retorno = parseFloat(resultado) / parseFloat(numero);
            }
            break;                
    }
    return retorno;
}

console.log(calculate('/', 15, 7));