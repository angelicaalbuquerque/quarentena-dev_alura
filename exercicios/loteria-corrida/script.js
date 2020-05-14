function ExecutarSorteio() {
  numeroAleatorio = Math.floor(Math.random()*100);
  console.log(numeroAleatorio);

  chute = prompt("Seu número da sorte: ");

  while (chute > 10 || chute < 0 || chute !== 'number') {
      chute = prompt("Número inválido! Digite novamente um número de 0 a 10.");
  }

  numeroCerto = chute == numeroAleatorio;

  if (numeroCerto) {
    paragrafoResultado.innerHTML = "Você ganhou o sorteio!";
  } 
  
  if (!numeroCerto) {
    paragrafoResultado.innerHTML = "Que pena! Tente novamente!";
  }
}

//  a função Math.floor(Math.random) retorna o menor número inteiro dentre o número "x"