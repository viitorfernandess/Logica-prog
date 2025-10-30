const frm = document.querySelector("form")
const resp = document.querySelector("#resp")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

const altura = Number(frm.inAltura.value)
const base = Number(frm.inBase.value)

const area = base * altura

resp.innerText = `A base do retângulo é ${area}.`
})