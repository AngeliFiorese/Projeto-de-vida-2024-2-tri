const caixaPrincipal = document.querySelector
    (“.caixa_principal”);

const caixaPerguntas = document.querySelector
    (“.caixa_perguntas”);

const caixaAlternativas = document.querySelector
    (“.caixa_alternativas”);

const caixaResultado = document.querySelector
    (“.caixa_resultado”);

const textoResultado = document.querySelector
    (“.texto_resultado”);

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