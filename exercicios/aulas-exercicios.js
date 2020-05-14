alert("Olá! Vamos começar a nos conhecer para, juntos, fazermos uns exercícios de lógica de programação com JavaScript, ok?");

nome = prompt("Qual é o seu nome?");

idade = prompt("Prazer em te conhecer! Agora, qual é a sua idade?");

altura = prompt("Qual é a sua altura? (Use o ponto e não a vírgula para separar as medidas)");

peso = prompt("Qual é o seu peso? (Use o ponto e não a vírgula para separar as medidas)")

imc = (peso/(altura*altura));

alert("Vamos agora começar a praticar! :)");

ano = prompt("Antes, pode só me informar em que ano estamos, por favor? Vou precisar para fazer alguns cálculos. hehe");

/* exercícios */

//Batimento cardíaco
alert("Sabia que o coração bate " + 75 * 60 + " vezes por hora e " + (75 * 60) * 24 + " vezes por dia? Se você tem " + idade + " anos, então tem cerca de " + idade * 365 + " dias de vida e seu coração já bateu em torno de " + ((75 * (60 * 60) * 24) * (idade * 365)) + " vezes durante esses " + idade + " anos!")

//IMC
document.write("Continuando as curiosidades, vamos descobrir o seu IMC, ", nome, "! <br>");

document.write("<br> O índice de massa corporal (IMC) é uma medida internacional usada para calcular se uma pessoa está no peso ideal." + " Se a sua altura é " + altura + " e o seu peso é " + peso + " logo, seu IMC é ", imc.toFixed(2) , ". <br>", "<br>Confira na tabela abaixo onde sua massa corpórea se enquadra:" + "<br><br>Abaixo de 17 ------------ Muito abaixo do peso <br>Entre 17 e 18,49 -------- Abaixo do peso <br>Entre 18,5 e 24,99 ------ Peso normal <br>Entre 25 e 29,99 -------- Acima do peso <br>Entre 30 e 34,99 -------- Obesidade I <br>Entre 35 e 39,99 ------- Obesidade II" );

document.write("<br><br>Agora alguns exercícios livres!");

//Balas
document.write("<br><br>Maria foi a padaria e comprou 19 balas, depois voltou a padaria e comprou mais 45. Quantas balas Maria tem agora?<br> R: Maria tem ", 45 + 19 , " balas no total.");

//Área de circunferência
document.write("<br><br>Para calcular a área de uma circunferência, usamos a seguinte fórmula: area = pi x raio x raio. O valor de pi = 3.14, se o valor do meu raio é 2cm, qual a área da circunferência?<br> R: A área da circunferência é ", 3.14 * (2 * 2) , " cm.");

//Média de idades 
document.write("<br><br>Guilherme tem 30 anos e tem 3 irmãs, a Carol que tem 20 anos, Márcia que tem 15, Patrícia que tem 10 anos. Qual a média de idade da família do Guilherme? <br> R: A média da idade é dos irmãos é de ", (20 + 15 + 10 + 30) / 4 , ". anos.");

//Idade da vovó
document.write("<br><br>Quantos anos tem a avó da amiga da Maria que nasceu em 1940? <br>R: A vovó tem ", ano - 1940," anos.");

//<br>
document.write("<br><br>Oi<br>como<br>você<br>está<br>pulando<br>linha<br>?<br>Usando o < br > , ou seja, o break row.")

document.write("<br><br>O carro da Amanda faz 12km/l. Ela viajou por 10 horas a uma velocidade de 81km/h. Quantos de litros combustível foram necessários para realizar essa viagem? <br> R: Ela precisou de ",(81*10)/ 12," litros de combustível.");



