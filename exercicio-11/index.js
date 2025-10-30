const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const primeiroVal = Number(frm.inPrimeiroVal.value) 
    const segundoVal  = Number(frm.inSegundoVal.value)

    if(isNaN(primeiroVal) || isNaN(segundoVal)) {
        resp.innerText = `Por favor, informe dois números válidos.`
        return;
    }

    if (primeiroVal > segundoVal) {
resp.innerText = `O primeiro número é maior!`
    } else if (primeiroVal == segundoVal){
resp.innerText = `Os números são iguais!`
    } else {
        resp.innerText =`O segundo número é maior!`
    }

})