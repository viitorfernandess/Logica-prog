// Seleciona o formulário da página
const frm = document.querySelector("form")

// Seleciona o elemento onde vamos mostrar a resposta (mensagem para o usuário)
const resp = document.getElementById("resp")

// Gera um número aleatório entre 1 e 10 (inteiro)
// Este é o número que o usuário precisa adivinhar
const numeroSecreto = Math.floor(Math.random() * 10) + 1

// Adiciona um evento ao formulário que é disparado quando ele é enviado
frm.addEventListener("submit", (e) => {
    // Evita que o formulário recarregue a página ao ser enviado
    e.preventDefault()

    // Pega o número digitado pelo usuário e converte de string para número
    const numero = Number(frm.inNumero.value)

    // Aqui começa a lógica do jogo
    // Comparando o número digitado com o número secreto

    if (numero === numeroSecreto) {
        // Caso 1: usuário acertou
        // Mostra mensagem de vitória
        resp.textContent = "Parabéns! Você acertou."
        // O jogo poderia reiniciar aqui se você quiser
    }
    else if (numero < numeroSecreto) {
        // Caso 2: número digitado é menor que o secreto
        // Dá uma dica que o número correto é maior
        resp.textContent = "O número é maior. Tente novamente."
    }
    else {
        // Caso 3: número digitado é maior que o secreto
        // Dá a dica que o número correto é menor
        resp.textContent = "O número é menor. Tente novamente."
    }

    // Limpa o campo de input para o usuário digitar outro número
    frm.inNumero.value = ""

    // Coloca o cursor de volta no campo de input
    frm.inNumero.focus()

    /* Fluxo resumido para cada tentativa:
       1. Usuário digita um número e clica em "Verificar"
       2. O evento 'submit' é disparado
       3. O número digitado é comparado com o número secreto
       4. Dependendo do resultado, mostramos uma mensagem:
          - Acertou → "Parabéns!"
          - Menor → "O número é maior"
          - Maior → "O número é menor"
       5. Campo de input é limpo e o cursor volta para digitar outro número
       6. O usuário tenta novamente até acertar
    */
})
