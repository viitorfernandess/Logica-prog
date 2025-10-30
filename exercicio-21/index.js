const frm =  document.querySelector("form")
const resp = document.getElementById("resp")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

   const numeros  =  [ 
    Number(frm.inNumero1.value),
    Number(frm.inNumero2.value),
    Number(frm.inNumero3.value),
    Number(frm.inNumero4.value)
   ] 

   let numerosIntervalo = 0

   numeros.forEach((numero) => {
    if (numero >= 10 && numero <= 20) {
        numerosIntervalo++
    }
   })

   resp.innerText = `Quantidade de núemros no intervalo entre 10 e 20 é ${numerosIntervalo}`
})