const frm = document.querySelector("form")
const resp =  document.querySelector("#resp")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

const votosTotal = Number(frm.inVotosTotal.value)
const votosValidos = Number(frm.inVotosValidos.value)
const votosBrancos = Number(frm.inVotosBrancos.value)
const votosNulos = Number(frm.inVotosNulos.value)

// Verificações 
if (votosTotal === 0 || isNaN(votosTotal) || isNaN(votosValidos) || isNaN(votosBrancos) || isNaN(votosNulos)) {
    resp.innerText = `Por favor, preencha todos os campos corretamente.`
    return
}

const somaVotos = votosValidos + votosNulos + votosBrancos
if (somaVotos !== votosTotal) {
    resp.innerText = `A soma dos votos não confere com o total de votos.`
    return
}

const perVotosValidos = ((votosValidos / votosTotal) * 100) 
const perVotosBrancos = ((votosBrancos / votosTotal) * 100) 
const perVotosNulos = ((votosNulos / votosTotal) * 100) 

resp.innerText = `O total de votos é ${votosTotal}!\nO percentual de votos válidos é ${perVotosValidos.toFixed(2)}%.\nO percentual de votos brancos é ${perVotosBrancos.toFixed(2)}%.\nO percentual de votos nulos é ${perVotosNulos.toFixed(2)}%.`
})