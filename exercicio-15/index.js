const frm = document.querySelector("form")
const resp = document.querySelector("#resp")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const n1 = Number(frm.inPrimNumero.value)
    const n2 = Number(frm.inSegNumero.value)
    const n3 = Number(frm.inTerNumero.value)

    const numeros = [n1, n2, n3]   // coloca os números dentro de um array

    numeros.sort((a, b) => a - b)  // ordena do menor para o maior

    resp.innerText = `Os números em ordem crescente são: ${numeros.join(", ")}.`
})
