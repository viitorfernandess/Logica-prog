// Pegar elementos do HTML
const form = document.querySelector("form")
const resp = document.getElementById("resp")

form.addEventListener('submit', (e) => {
    e.preventDefault() // evita recarregar a página

    // Pegar todos os inputs com a classe "num"
    const inputs = document.querySelectorAll('.num')

    // Transformar os valores em números e colocar em um array
    const numeros = []
    inputs.forEach(input => {
        numeros.push(Number(input.value))
    })

    // Calcular a soma acumulada
    const somaAcumulada = []
    let soma = 0
    numeros.forEach(num => {
        soma += num
        somaAcumulada.push(soma);
    })

    // Mostrar o resultado
    resp.innerText = `[${somaAcumulada.join(', ')}]`
})
