const frm = document.querySelector("form"); // Seleciona o formulário
const resp = document.getElementById("resp"); // Seleciona o elemento onde vamos mostrar a resposta

// Lista de números
const numerosLista = [1, 4, 6, 12, 14, 17, 19];

frm.addEventListener("submit", (e) => {
    e.preventDefault() // Evita que o formulário recarregue a página ao enviar

    // Pega o número informado pelo usuário e converte para Number
    const numero = Number(frm.inNumero.value)

    // Verifica se o número está na lista
    const posicao = numerosLista.indexOf(numero)
    // indexOf retorna:
    // - posição (0,1,2...) se o número estiver na lista (primeira ocorrência)
    // - -1 se o número não estiver na lista

    if (posicao !== -1) {
        // Número encontrado
        resp.innerText = `O número ${numero} está na lista, na posição ${posicao + 1}.`
        // +1 para mostrar posição começando do 1, não do índice 0
    } else {
        // Número não encontrado
        resp.innerText = `O número ${numero} NÃO está na lista.`
    }
});
