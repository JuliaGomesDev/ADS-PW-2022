let moeda = document.querySelector('input#moeda')
let res = document.getElementById('res')

function converter() {
    if(moeda.value < 5.07) {
        res.innerHTML = `Infelizmente você está em crise e não tem 1 dólar no bolso &#x1F641;`
    } else {
        res.innerHTML = `Você possui ${(moeda.value/5.07).toFixed(2)} dólares &#x1F4B0;!!!`
    }
   
}