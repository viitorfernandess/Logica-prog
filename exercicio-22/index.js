// Seleciona o formulário da página
const frm = document.querySelector("form");

// Seleciona o elemento onde vamos mostrar a resposta (resultado)
const resp = document.getElementById("resp");

// Adiciona um "ouvinte" para quando o formulário for enviado
frm.addEventListener("submit", (e) => {
  e.preventDefault(); // Evita que a página recarregue ao enviar o formulário

  // Pega o valor que o usuário digitou no campo de texto
  // 'toLowerCase()' transforma tudo em letras minúsculas para facilitar a verificação
  const palavra = frm.inPalavra.value.toLowerCase();

  // Inicializa o contador de vogais com zero
  let contador = 0;

  // Loop que vai percorrer cada letra da palavra
  for (let i = 0; i < palavra.length; i++) {
    // Pega a letra que está na posição 'i' da palavra
    const letra = palavra[i];

    // Verifica se a letra é uma vogal (a, e, i, o, u)
    if ("aeiou".includes(letra)) {
      // Se for vogal, aumenta o contador em 1
      contador++;
    }
  }

  // Mostra o resultado na página para o usuário
  resp.textContent = `A palavra "${palavra}" tem ${contador} vogal(is).`;
});
