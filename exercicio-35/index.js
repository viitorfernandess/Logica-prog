const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const criancas = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inNome.value
    const idade = Number(frm.inIdade.value)

    criancas.push({ nome, idade })
    frm.reset()  // limpa os campos do form
    frm.inNome.focus  // posiciona no campo do formulário após resetar
    frm.btListar.dispatchEvent(new Event("click"))
})