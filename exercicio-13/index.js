const frm = document.querySelector("form")
const resp =  document.querySelector("#resp")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

const saldo = Number(frm.inSaldo.value)
const cartao = Number(frm.inCartaoCredito.value)

const saldoFinal = saldo - cartao

if (saldoFinal  < 0) {
    resp.innerText = `Seu saldo está negativo no valor de R$ ${saldoFinal.toFixed(2)}.`
} else {
    resp.innerText = `Seu saldo está positivo no valor de R$ ${saldoFinal.toFixed(2)}.`
}
})