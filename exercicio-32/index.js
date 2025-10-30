const frm = document.querySelector("form")
const respNome = document.querySelector("span")
const respLista = document.querySelector("pre")

const pacientes = [] //declara vetor global

frm.addEventListener("submit", (e) => {
    e.preventDefault()     // evita o envio do form
    const nome = frm.inPaciente.value  // obtém nome do paciente
    pacientes.push(nome)   // adiciona o nome ao final do vetor
    let lista = ""         // string para concatenar pacientes

    // for tradicional ( inicia em 0, enquanto menor que o tamanho do array)
    for (let i = 0; i < pacientes.length; i++) {
        lista += `${pacientes[i]}\n`
    }

    respLista.innerText = lista  // exibe a lista de pacientes na página
    frm.inPaciente.value = ""    // limpa o conteúdo do campo formulário
    frm.inPaciente.focus()       //  posiciona o cursor no campo inPaciente
})
// Adiciona um "ouvinte" para o evento click no btUrgencia que está no form
frm.btUrgencia.addEventListener("click", () => {
    // verifica se as validações do form estão ok (no caso, paciente is required)
    if (!frm.checkValidity()) {
        alert("Informe o nome do paciente a ser atendido em caráter de urgência")
        frm.inPaciente.focus()  // posiciona o cursor no campo inPaciente
        return // retorna ao form
    }
    const nome = frm.inPaciente.value  // obtém nome do paciente
    pacientes.unshift(nome)            // adiciona paciente no início do vetor
    let lista = ""                     // lista para concatenar pacientes
    // forEach aplicado sobre o array pacientes
    pacientes.forEach((paciente, i) => (lista += `${i + 1}.  ${paciente}\n`))

    respLista.innerText = lista   // exibe a lista de pacientes na página
    frm.inPaciente.value = ""     // limpa o conteúdo do campo de fomrulário
    frm.inPaciente.focus()        // posiciona o cursor no campo
})

frm.btAtender.addEventListener("click", () => {
    // se o tamanho do vetor = 0
    if (pacientes.lenght == 0) {
        alert("Nào há pacientes na lista de espera.")
        frm.inPaciente.focus()
        return
    }

    const atender = pacientes.shift()  //remove do início da fila (e obtém nome)
    respNome.innerText = atender       // exibe o nome do paciente em atendimento
    let lista = ""                     // string para concatenar pacientes

    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`))
    respLista.innerText = lista        // exibe lista de pacientes na página 
})
