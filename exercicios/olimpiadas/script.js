primeiraOlimpiada = 1896;
anoAtual = parseInt(prompt("Em que ano estamos?"));

while(primeiraOlimpiada <= anoAtual) {
  document.write('Em ' + primeiraOlimpiada + " teve olimpiadas!" + '<br>');
  primeiraOlimpiada = primeiraOlimpiada + 4;
}