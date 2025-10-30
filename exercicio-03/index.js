const frm = document.querySelector("form")
const resp = document.querySelector("#resp")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

const idade1 = Number(frm.inIdade01.value)
const idade2 = Number(frm.inIdade02.value)

resp.innerText = `A média da idade das crianças é ${(idade1 + idade2) / 2}!\n A soma das idades é ${idade1  + idade2}!`
})