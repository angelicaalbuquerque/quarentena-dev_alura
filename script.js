function gerar() {

  contador = 1000000;

  while(contador > 0) {   
    contador = contador - 1;
    htmlCertificado = emitirCertificado(inputNome.value);
  }

  listaLink = [
  "Cálculo de batimento cardíaco", 
  "Cálculo de IMC",
  "Cálculo de número de balas",
  "Cálculo de área de circunferência",
  "Cálculo de média de idades",
  "Cálculo de combustível",
  "Cálculo de meses",
  "Cálculo de Olimpíadas",
  "Simulador de aplicativo de Transporte",
  "Simulador de Número da Sorte",
  "Simulador de Like Button",
  "Simulador de Ficha Cadastral"
  ];

  contaLink = 0;
  listaLinkcomHTML = "";
  while(contaLink < 12) {
    link = listaLink[contaLink];
    listaLinkcomHTML = `<li>${link}</li>` + listaLinkcomHTML;
    contaLink = contaLink + 1;
  }

  document.body.innerHTML = 
  `${htmlCertificado}
  <ol>
    ${listaLinkcomHTML}
  </ol>`;
}