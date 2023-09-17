
window.addEventListener('load', function(){
    let resultado = '';
    let numero = '';
    let numero2 = '';
    let operacion = '';
    let pantalla = document.querySelector('#pantalla');
    //SELECCIÓN NÚMEROS
    const numeros = document.querySelectorAll('.number');
    let semaforoIgual = true;
    //ESCRIBIR NUMEROS
    function escribirNumeros(numeros){
        for(let i = 0; i < numeros.length; i++){
            numeros[i].addEventListener('click', function(){
                if(resultado !== '' && semaforoIgual){
                    resultado = '';
                    numero = '';
                    numero2 = '';
                    operacion = '';
                    pantalla.innerHTML = ``;
                    semaforoIgual = false;
                }
                pantalla.innerHTML += numeros[i].textContent;
                
            })
        }
    }
    
    escribirNumeros(numeros);
    
    //SIGNOS
    const signos = document.querySelectorAll('.signo');

    for(let i = 0; i < signos.length; i++){
        signos[i].addEventListener('click', function(){
            operacion = signos[i].innerHTML;
            numero = pantalla.innerHTML;
            pantalla.innerHTML = '';
            console.log(`resultado = ${resultado}`);
            console.log(`numero = ${numero}`);
            console.log(`numero2 = ${numero2}`);
            semaforoIgual = false;
            console.log(`semaforoIgual = ${semaforoIgual}`);
        })
    }

        


    //BOTON IGUAL
    let btnIgual = document.querySelector('#igualSigno');
    btnIgual.addEventListener('click', function(){
        numero2 = pantalla.innerHTML;
        resultado = calculate(operacion, numero, numero2);
        console.log(`numero = ${numero} - operacion = ${operacion} - numero2 = ${numero2} - resultado = ${resultado}`);
        pantalla.textContent = resultado;
        semaforoIgual = true;
        console.log(`semaforoIgual = ${semaforoIgual}`);
    })

    //BORRAR TODO
    let btnC = document.querySelector('#borrar-todo');
    btnC.addEventListener('click', function(){
        pantalla.textContent = '';
        resultado = '';
        numero = '';
        numero2 = '';
        console.log(`resultado = ${resultado}`);
        console.log(`numero = ${numero}`);
        console.log(`numero2 = ${numero2}`);
    })

    //BORRAR DE A UNO
    let btnBackspace = document.querySelector('#borrar-ultimo');
    btnBackspace.addEventListener('click', function(){
        let contenidoPantalla = pantalla.textContent;
        if(contenidoPantalla.length > 0){
            contenidoPantalla = contenidoPantalla.slice(0, -1);
            pantalla.textContent = contenidoPantalla;
        }
            
    })

    function calculate(operacion, numero, numero2){
        let retorno = 0;
        switch(operacion){
            case '+':
                retorno = parseFloat(numero) + parseFloat(numero2);
                break;
            case '-':
                retorno = parseFloat(numero) - parseFloat(numero2);
                break;
            case '*':
                retorno = parseFloat(numero) * parseFloat(numero2);
                break;
            case '/':
                retorno = parseFloat(numero) / parseFloat(numero2);
                break;                
        }
        return retorno;
    }


    
})

