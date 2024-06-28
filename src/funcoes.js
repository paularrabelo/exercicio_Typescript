"use strict";
function calculaArea(base, altura) {
    return base * altura;
}
const calculaArea2 = (base, altura) => base * altura;
function somar(...numeros) {
    console.log(numeros);
}
//retorno em que a resposta pode ser dois tipos
function teste() {
    if (10 > 5) {
        return 'dez maior que cinco';
    }
    else {
        return 5;
    }
}
const resultadoDeTeste = teste();
