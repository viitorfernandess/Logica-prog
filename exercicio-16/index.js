const frm = document.querySelector("form")
const resp = document.querySelector("#resp")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const ladoA = Number(frm.inLadoA.value)
    const ladoB = Number(frm.inLadoB.value)
    const ladoC = Number(frm.inLadoC.value)

    if (
        ladoA < ladoB + ladoC &&
        ladoB < ladoA + ladoC &&
        ladoC < ladoA + ladoB
    ) {
        resp.innerText = `De acordo com os valores informados, é possível formar um triângulo.`
    } else {
        resp.innerText = `De acordo com os valores informados, NÃO é possível formar um triângulo.`
    }
})
