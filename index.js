/*1 - Crie um sistema que peça para o seu usuário as seguintes informações: nome, idade, altura e peso. 
//2 - Salve essas informações em variáveis e a partir delas obtenha o ano de nascimento (considere o ano atual como 2023, desconsidere o mês) e o IMC do usuário.
//*O IMC é a relação entre peso e altura e o cálculo é feito de acordo com a fórmula: 
//IMC = peso / (altura x altura)
//3 - Exiba no console a seguinte mensagem (substituindo pelas informações obtidas): "Olá fulano, você tem 00 anos, nasceu em 2000, tem 1,83 de altura, pesa 75kg seu IMC é 22,39 Kg/m2"*/ 


let nome = prompt("insira seu nome:");

let idade = parseInt(prompt("insira sua idade:"));

let altura = parseFloat(prompt("insira sua altura:"));

let peso = parseInt(prompt("insira seu peso:"));

let anoNascimento = 2023 - idade

let imc = peso/(altura*altura);

console.log("Olá, " + nome + " voce tem " + idade + " anos," + "nasceu em " + anoNascimento + ",tem " + altura + " de altura, " + "pesa " + peso + "kg " + "seu IMC é " + imc + "kg/m2");