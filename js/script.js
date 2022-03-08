function ConverterDolarParaReal() {
    var valorElemeto = document.getElementById("valor");
    var valorEmDolar = parseFloat(valorElemeto.value).toFixed(2);

    var valorEmReal = valorEmDolar * 5;
    var elementoValorConvertido = document.getElementById("valorConvertido");

    var valorConvertido = "O valor convertido de <em>dólar</em> para <em>real</em> é: R$ " + valorEmReal.toFixed(2).replace(".", ",");
    elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterEuroParaReal() {
    var valorElemeto = document.getElementById("valor");
    var valorEmEuro = parseFloat(valorElemeto.value).toFixed(2);

    var valorEmReal = valorEmEuro * 5.50;
    var elementoValorConvertido = document.getElementById("valorConvertido");

    var valorConvertido = "O valor convertido de <em>euro</em> para <em>real</em> é: R$ " + valorEmReal.toFixed(2).replace(".", ",");
    elementoValorConvertido.innerHTML = valorConvertido;
}