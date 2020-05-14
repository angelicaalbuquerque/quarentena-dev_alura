nome = prompt("Nome completo: ");

nascimento = prompt("Data de nascimento: ");

idade = prompt("Idade: ");

confirmarCondicao = confirm("Tem condição pré-existente?");

if (confirmarCondicao) {condicao = "Sim"} 

if (confirmarCondicao == false) {condicao = "Não"} 


acompanhamento = confirm("Precisa de acompanhamento médico?");

tagh1.innerHTML = "Nome: " + nome;

lista.innerHTML = `<li> Data Nascimento:  ${nascimento} </li> <li>Idade: ${idade}</li> <li>Tem condição pré-existente? ${condicao}</li> <li>Precisa de acompanhamento médico? ${acompanhamento}</li>` 