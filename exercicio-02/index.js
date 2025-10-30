const frm = document.querySelector("form")
const resp = document.querySelector("#resp")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

const numeroA = Number(frm.InNumeroA.value)
const numeroB = Number(frm.InNumeroB.value)

resp.innerText = `Variável A: ${numeroB}\nVariável B: ${numeroA}`
})