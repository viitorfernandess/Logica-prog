const frm = document.querySelector("form")
const resp = document.getElementById("resp")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const number = Number(frm.inNumero.value)

    if (number <= 0) {
        alert("Informe um número maior que ZERO.")
        frm.inNumero.focus()
        return
    }
    let contagem = ""
    for (let i = 1; i <= number; i = i++) {
        contagem += i + " "
    }
    resp.innerText = contagem
})