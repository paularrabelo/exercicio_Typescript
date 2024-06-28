"use strict";
//Tipo Booleano
let estaChovendo = false;
estaChovendo = true;
//Tipo Numérico - não tem diferenciação entre números inteiros e fracionados.
let idade = 27;
let altura = 1.75;
//Tipo string
const nacionalidade = 'Brasileira';
//Tipos de lista com apenas um tipo
const colegas = ['Lucas', 'Fernanda', 'Maria', 'José'];
const tecnologias = ['html', 'css', 'js', 'ts'];
const notas = [7, 9, 5, 8]; //Lista apenas de leitura, sendo impossivel acrescentar ou deletar dados
//Tipos de listas com mais de um tipo
const lista = ['Paula', true, 28];
const listaDetalhada = ['Mariana', true, 33];
//Tipo de dados mistos
let idadeDaAna = 25;
idadeDaAna = '25 anos';
//Tipo Any: aceita qualquer tipo de dado
let dadosDaApi;
dadosDaApi = 10;
dadosDaApi = true;
dadosDaApi = [1, 2, 3];
dadosDaApi = 'string';
//Tipagem implicida:
let curso = 'Front-end';
//Se tentarmos alterar para curso = 10. Vai dar erro, pois o TS identifica o tipo como 'string'
