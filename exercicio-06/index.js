const frm = document.querySelector("form")
const resp = document.querySelector("#resp")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

const idadeAnos = Number(frm.inIdade.value)
const idadeMeses = idadeAnos * 12
const idadeDias = idadeMeses * 30

resp.innerText = `A idade em meses são ${idadeMeses} meses!\n A idade em dias são ${idadeDias} dias!`

})
