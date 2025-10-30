const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.inNumero.value)

    if (numero > 10) {
        resp.innerText = `O valor informado é maior  que 10!`
    } else if (numero == 10) {
        resp.innerText = `O valor informado é igual a 10!`
    } else {
        resp.innerText = `O valor informado é menor que 10!`
    }
})