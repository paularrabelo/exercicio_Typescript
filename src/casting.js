"use strict";
//Quando temos uma variável já existente em algum outro arquivo, temos que criar o namespace, para utilizar a variavel na pasta desejada.
//Como tratar um tipo any como outro tipo. (idade as number)
var casting;
(function (casting) {
    let idade = 25;
    idade.toFixed();
    idade.length;
    idade.forEach(x => {
        console.log(x);
    });
})(casting || (casting = {}));
