const frm = document.querySelector("form")
const resp = document.querySelector("#resp")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

const atual = Number(frm.inQuantidadeAtual.value)
const maxima = Number(frm.inQuantidadeMax.value)
const minima = Number(frm.inQuantidadeMin.value)

const media = (maxima + minima) / 2

if (atual <= media) {
    resp.innerText = `Efetuar compra.`
} else {
    resp.innerText = `Não efetuar compra.`
}
})