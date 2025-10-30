const frm = document.querySelector("form")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.inNumero.value)
    alert(numero)
})