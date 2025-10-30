// Seleciona o formulário da página
const frm = document.querySelector("form")

// Seleciona o elemento onde o resultado será exibido
const resp = document.getElementById("resp")

// Adiciona um "ouvinte" para o evento de envio do formulário
frm.addEventListener("submit", (e) => {
    // Impede que o formulário seja enviado e a página recarregue
    e.preventDefault()

    // Pega o valor digitado no input "inNumero1" e converte para número
    const numero1 = Number(frm.inNumero1.value)
    // Pega o valor digitado no input "inNumero2" e converte para número
    const numero2 = Number(frm.inNumero2.value)

    // Inicializa a variável resultado com 0
    let resultado = 0

    // Loop que se repete "numero2" vezes
    // Em cada repetição, soma "numero1" ao resultado
    for (let i = 0; i < numero2; i++) {
        resultado += numero1
    }

    // Exibe o resultado da multiplicação no elemento <h3>
    resp.textContent = `O resultado da multiplicação é ${resultado}`
})
