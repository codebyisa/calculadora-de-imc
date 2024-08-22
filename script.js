
document.getElementById('calcular').addEventListener('click', function() {
    // obter os valores de peso e altura
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    // verificar se os valores são válidos
    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        alert('Por favor, insira valores válidos para peso e altura.');
        return;
    }

    // calcular o IMC
    const imc = peso / (altura * altura);

    // exibir o resultado
    let classificacao;
    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = 'Sobrepeso';
    } else {
        classificacao = 'Obesidade';
    }

    document.getElementById('resultado').textContent = `Seu IMC é ${imc.toFixed(2)} (${classificacao})`;
});
