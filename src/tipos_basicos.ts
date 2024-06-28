//Tipo Booleano
let estaChovendo: boolean = false

estaChovendo = true;

//Tipo Numérico - não tem diferenciação entre números inteiros e fracionados.
let idade: number = 27

let altura: number = 1.75

//Tipo string
const nacionalidade: string = 'Brasileira'

//Tipos de lista com apenas um tipo
const colegas: string[] = ['Lucas', 'Fernanda', 'Maria', 'José'];
const tecnologias: Array<string> = ['html', 'css', 'js', 'ts'];
const notas: ReadonlyArray<number> = [7, 9, 5, 8] ; //Lista apenas de leitura, sendo impossivel acrescentar ou deletar dados

//Tipos de listas com mais de um tipo
const lista: [string, boolean, number] = ['Paula', true, 28]
const listaDetalhada: [nome: string, maiorDeIdade: boolean, idade: number] = ['Mariana', true, 33];

//Tipo de dados mistos
let idadeDaAna: number | string = 25
idadeDaAna = '25 anos'

//Tipo Any: aceita qualquer tipo de dado
let dadosDaApi: any;
dadosDaApi = 10
dadosDaApi = true
dadosDaApi = [1,2,3]
dadosDaApi = 'string'

//Tipagem implicida:
let curso = 'Front-end'
//Se tentarmos alterar para curso = 10. Vai dar erro, pois o TS identifica o tipo como 'string'