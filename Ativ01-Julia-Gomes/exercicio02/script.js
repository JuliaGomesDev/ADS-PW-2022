let anoNasc = document.querySelector('input#anoNasc')
let anoAtual = document.querySelector('input#anoAtual')
let res = document.getElementById('res')
let idade, idade2050

function verificar() {
    idade = anoAtual.value - anoNasc.value
    idade2050 = 2050 - anoNasc.value
    res.innerHTML = `<p>A sua idade é ${idade}</p>`
    res.innerHTML += `E para matar a curiosidade em 2050 você terá ${idade2050} anos`
}
