let n1 = Number(prompt('Informe o 1º Valor:'))
let n2 = Number(prompt('Informe o 2º Valor:'))

function calculate () {
    alert(`Os resultados das operações entre ${n1} e ${n2} são: \nSoma: ${n1 + n2} \nSubtração: ${n1 - n2} \nMultiplicação: ${n1 * n2} \nDivisão: ${n1/n2} \nResto: ${n1%n2}`);
}

calculate()