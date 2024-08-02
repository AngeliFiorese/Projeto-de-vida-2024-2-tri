const caixaPrincipal = document.querySelector(“.caixa -
    principal”);

const caixaPerguntas = document.querySelector(“.caixa -
    perguntas”);

const caixaAlternativas = document.querySelector(“.caixa -
    alternativas”);

const caixaResultado = document.querySelector(“.caixa -
    resultado”);

const textoResultado = document.querySelector(“.texto -
    resultado”);

const perguntas = [
    {
        enunciado: “Bavaresco é o sobrenome de quem?”,
    alternativas: [“Enzo”, “Carlos”],
},
{
    enunciado: “Fiorese é o sobrenome de quem ?”,
    alternativas: [“Angeli”, “Augusto”],
},
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}
mostraPergunta();