const frm = document.querySelector("form")
const resp = document.querySelector("#resp")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

const salarioMensal = Number(frm.inSalario.value)
const perReajuste = Number(frm.inReajuste.value)

const reajuste = salarioMensal * (perReajuste / 100)


const novoSalario = salarioMensal +  reajuste

resp.innerText = `Seu salário reajustado será de R$ ${novoSalario}`
})