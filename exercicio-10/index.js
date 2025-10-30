const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.inNumero.value)

    if (numero < 0) {
        resp.innerText = `O número informado é negativo! `
    } else if (numero == 0) {
        resp.innerText = `Zero é um número neutro!`
    } else {
        resp.innerText = `O número informado é positivo!`
    }
})