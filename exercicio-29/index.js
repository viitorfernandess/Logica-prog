// 1) Pega o <form> da página
const frm = document.querySelector("form")

// 2) Pega a <h3 id="resp"> onde vamos mostrar o resultado
const resp = document.getElementById("resp")

// 3) Escuta o envio do formulário (quando você clica em "Calcular")
frm.addEventListener("submit", (e) => {
  // 4) Impede a página de recarregar ao enviar o formulário
  e.preventDefault()

  // 5) Lê os valores digitados nos inputs e converte para número
  //    OBS: os nomes inNumero1 e inNumero2 precisam bater com os IDs do HTML
  const firstNumber = Number(frm.inNumero1.value)
  const secondNumber = Number(frm.inNumero2.value)

  // 6) Validação simples: se algo não for número, avisa e sai
  if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
    resp.innerText = "Digite dois números válidos."
    return
  }

  // 7) Começamos a sequência a partir dos dois números informados
  let n1 = firstNumber
  let n2 = secondNumber

  // 8) Montamos a string de saída já com os dois primeiros termos
  let sequencia = `${n1}, ${n2}`

  // 9) Quantos termos adicionais você quer gerar?
  const termosExtras = 20

  // 10) Gera mais 'termosExtras' termos
  for (let i = 0; i < termosExtras; i++) {
    // soma dos dois anteriores = próximo termo da sequência
    const proximo = n1 + n2

    // acrescenta o novo termo na string
    sequencia += `, ${proximo}`

    // "anda" a janela: o segundo vira o primeiro, e o próximo vira o segundo
    n1 = n2
    n2 = proximo
  }

  // 11) Mostra tudo dentro da <h3 id="resp">
  resp.innerText = sequencia
})
