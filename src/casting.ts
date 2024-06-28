//Quando temos uma variável já existente em algum outro arquivo, temos que criar o namespace, para utilizar a variavel na pasta desejada.
//Como tratar um tipo any como outro tipo. (idade as number)
namespace casting {
    let idade: any = 25;
    (idade as number).toFixed();
    (idade as string).length;
    (idade as string[]).forEach( x => {
        console.log(x);
    })
}
