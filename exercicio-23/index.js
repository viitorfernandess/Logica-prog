// Seleciona o formulário do HTML
const frm = document.querySelector("form")

// Seleciona o elemento onde o resultado será exibido
const resp = document.getElementById("resp")

// Adiciona um "ouvinte" para quando o formulário for enviado
frm.addEventListener("submit", (e) => {
    // Evita que o formulário recarregue a página
    e.preventDefault()

    // Pega o valor digitado no input chamado "inPalavra"
    const palavra = frm.inPalavra.value

    // Cria uma variável vazia para armazenar a palavra invertida
    let invertida = ""

    // Loop para percorrer a palavra de trás para frente
    for (let i = palavra.length - 1; i >= 0; i--) {
        // Adiciona cada letra ao final da variável "invertida"
        invertida += palavra[i]
    }

    // Exibe a palavra invertida no elemento "resp"
    resp.innerText = `A palavra invertida é ${invertida}.`
})
