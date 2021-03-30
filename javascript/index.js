function DolarParaReal() {
var valorEmDolarTexto = prompt("Qual o valor em dolar que você quer converter?")
var valorEmDolarNumero = parseFloat(valorEmDolarTexto)
var valorEmReal = valorEmDolarNumero * 5.78
valorEmReal = valorEmReal.toFixed(2);

if(isNaN(valorEmReal) === true) { 
    valorEmReal = "Ocorreu algum problema ou nenhum numero foi informado!"
    alert(valorEmReal)
} else {
 alert(`${valorEmDolarNumero} dolares convertido para ${valorEmReal} reais`)   
}
}

function RealParaDolar() {
    var valorEmRealTexto = prompt("Qual o valor em real que você quer converter?")
    var valorEmRealNumero = parseFloat(valorEmRealTexto)
    var valorEmDolar = valorEmRealNumero / 5.78
    valorEmDolar = valorEmDolar.toFixed(2)

    if(isNaN(valorEmDolar) === true) {
        valorEmDolar = "Ocorreu algum problema ou nenhum numero foi informado!"
        alert(valorEmDolar)
    } else {
      alert(`${valorEmRealNumero} reais convertido para ${valorEmDolar} dolares`)  
    }   
}