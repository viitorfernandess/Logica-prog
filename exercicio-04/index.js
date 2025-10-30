const frm = document.querySelector("form")
const resp = document.querySelector("#resp")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

const numero1 = Number(frm.inNumero1.value)
const numero2 = Number(frm.inNumero2.value)

const soma = numero1 + numero2
const subtracao = numero1 - numero2
const divisao = numero1 / numero2
const multiplicacao = numero1 * numero2

resp.innerText = `Soma: ${soma}\n Subtração: ${subtracao}\n Divisão: ${divisao.toFixed(2)}\n Multiplicção: ${multiplicacao}`
})