/*
Fórmula: R$2.00 (tarifa base) + distância percorrida em km * R$1.40 (para cada km) + minutos * R$0.26 (para cada minuto)
*/

// distancia  = prompt('Qual foi a distância percorrida com o(a) passageiro(a)?');
// tempomin = prompt('Qual foi o tempo (em minutos) da viagem?');
// valorCorrida = 2 + distancia * 1.4 + tempomin * 0.26;

// document.write("<body style=background-color:green;>" + "<h1>O valor da sua corrida é: R$</h1>" + "<h2>" + valorCorrida.toFixed(2) + "</h2>" + "</body>");

function formatarMoeda(valor) {
  return valor.toFixed(2).replace('.', ',');
}

function calcular() {
  distancia = inputDistancia.value;
  tempomin = inputTempo.value;
  valorCorrida = 2 + distancia * 1.4 + tempomin * 0.26;
  botaoCalcular.innerHTML = "Total: R$" + formatarMoeda(valorCorrida);
}
