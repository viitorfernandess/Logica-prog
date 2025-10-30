// Seleciona o formulário da página
const frm = document.querySelector("form")

// Seleciona o elemento <p> onde vamos mostrar a resposta
const resp = document.getElementById("resp")

// Adiciona um evento ao formulário quando ele é enviado
frm.addEventListener("submit", (e) => {
    // Evita que o formulário recarregue a página ao enviar
    e.preventDefault()

    // Pega o valor digitado no input e transforma em um array de números
    const numeros = frm.inNumeros.value
        .split(',')                 // Divide a string em várias partes usando a vírgula como separador
        .map(num => Number(num.trim())); // Para cada parte: remove espaços e converte em número
        // Exemplo: "10, 5, 8, 20" → ["10", " 5", " 8", " 20"] → [10, 5, 8, 20]

    // Mostra o array no console (apenas para conferir)
    console.log(numeros)

    // Verifica se o usuário digitou pelo menos 2 números
    if (numeros.length < 2) {
        resp.textContent = "Informe pelo menos dois números.";
        return; // Sai da função, nada mais é executado
    }

    // Inicializa o menor e maior número com o primeiro elemento do array
    // Usamos numeros[0] em vez de deixar vazio porque undefined não funciona em comparações
    let min = numeros[0] // menor número inicial
    let max = numeros[0] // maior número inicial

    // Percorre todos os números do array para atualizar min e max
    numeros.forEach(num => {
        if (num < min) min = num // Se o número atual for menor que min, atualiza min
        if (num > max) max = num // Se o número atual for maior que max, atualiza max
    });

    // Calcula a maior diferença entre dois números: maior - menor
    const maiorDiferenca = max - min

    // Mostra o resultado na página
    // Também informa quais números geraram a maior diferença
    resp.textContent = `Maior diferença: ${maiorDiferenca} (entre ${min} e ${max})`
})
