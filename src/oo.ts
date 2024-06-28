class Pessoa {
    nome: string;
    renda?: number;

    constructor(nome: string, renda?: number) { // o parametro opcional, sempre é colocado após o parametro obrigatorio.
        this.nome = nome;
        this.renda = renda;
    }

    dizOla(): string {
        return `${this.nome} disse oi`;
    }
}

class ContaBancaria {
    protected saldo: number = 0; //Quando utilizamos o private, o dado é acessivel apenas na classe que é criada. Com o tipo protegido (protected) podemos acessar nas classes filhas.
    numeroConta: number;

    constructor(numeroConta: number) {
        this.numeroConta = numeroConta;
    }

    static retornaNumeroDoBanco() { //pertence a classe e não a estancia 
        return 125;
    }

    getSaldo () {
        return this.saldo;
    }

    depositar(valor: number) {
        this.saldo +=valor;
    }
}

class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor: number): void {
        this.saldo = valor * 2;
    }
}
const contaDoPedro = new ContaBancariaPessoaFisica(123456)
ContaBancaria.retornaNumeroDoBanco()

