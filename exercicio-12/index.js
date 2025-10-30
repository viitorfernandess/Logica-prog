const frm = document.querySelector("form")
const resp = document.querySelector("#resp")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nota1 = Number(frm.inNota1.value)
    const nota2 = Number(frm.inNota2.value)

    const media = (nota1 + nota2) / 2

    if (media >= 7) {
        resp.innerText = `Você está Aprovado!`
    } else if ( media >= 4) {
        resp.innerText = `Você está de Recuperação.`
    } else {
        resp.innerText = `Você está Reprovado.`
    }



})