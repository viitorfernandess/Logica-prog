// Seleciona o formulário e o elemento de resposta
const frm = document.querySelector("form")
const resp = document.querySelector("#resp")

// Adiciona o evento de submit no formulário
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o recarregamento da página

    // Cria um array com os 3 números informados
    const numeros = [
        Number(frm.inNumero1.value),
        Number(frm.inNumero2.value),
        Number(frm.inNumero3.value)
    ];

    let negativos = 0; // Inicializa o contador

    // Percorre o array e verifica se cada número é negativo
    numeros.forEach((numero) => {
        if (numero < 0) {
            negativos++ // Soma 1 se for negativo
        }
    })

    // Exibe o resultado na tela
    resp.innerText = `Quantidade de números negativos: ${negativos}`;
})
