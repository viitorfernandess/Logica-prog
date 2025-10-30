// Algoritmo que le dois valores e se os egundo valor informado for Zero, deve ser lido um novo valor, ou seja,  para o segundo valor nao pode ser aceito o valor zero.
// E deve informar o resultado da divisão do primeiro valor pelo segundo. -->

const frm = document.querySelector("form")
const resp  = document.querySelector("#resp")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

const n1 = Number(frm.inPrimValor.value)
let n2 = Number(frm.inSegValor.value)

while ( n2 === 0) {
    n2 = Number(prompt("O segundo valor não pode ser ZERO. Informe  novamente."))
}

const  divisao = n1 / n2
resp.innerText = `Resultado: ${divisao.toFixed(2)}`


})