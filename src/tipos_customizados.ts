type aluno = {
    nome: string;
    cursos?: string[]; //quando uma estrutura pode ser tratada como "inválida ou não precisa de uma resposta" Ex.: da const novoAluno
    idade: number;
}

const alunos: aluno[] = [
    {
        nome: "Carlos",
        cursos: [ "Front-end", "UX/UI"],
        idade: 27,
    },
    {
        nome: "Ana",
        cursos: [ "Front-end", "Python"],
        idade: 23,
    },
]

alunos.push({nome: "Julia",cursos: ["Front-end", "Python", "html"],idade: 29})

const novoAluno: aluno = { 
    nome: "Lucas",
    idade: 32,
}

function exibeAluno(aluno: aluno) {
    console.log(aluno.nome)
}