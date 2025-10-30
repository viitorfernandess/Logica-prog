const frm = document.querySelector("form")
const resp = document.getElementById("resp")
const btnClear = document.getElementById("btnClear") // seleciona o botão

let listName = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const name = frm.inName.value.trim()

    if(name === "") {
        alert("Digite um nome válido!")
        return
    }

    listName.push(name)
    resp.innerText = "Nomes cadastrados: " + listName.join(", ")

    frm.inName.value = ""
    frm.inName.focus()
})

// Evento para limpar a lista
btnClear.addEventListener("click", () => {
    listName = []          // esvazia a lista
    resp.innerText = ""    // limpa o elemento HTML
    frm.inName.focus()     // coloca o cursor no input
})
