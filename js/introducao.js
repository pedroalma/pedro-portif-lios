//a funcao console.log() serve para mensagens por meio de
//console, esta e util para debugar o codigo
console.log("Sou uma mensagem de console");

// //a funcao alert ela serve para exibir uma mensagem de alerta 
// //ao usuario 
// alert("sou uma mensagem de");
// //a funcao prompt recebe uma informacao do usuario do usuario e armazena em 
// //uma variavel se necessario 
// prompt("qual o seu nome ?");

// //a declaracao de variavel let cria uma variavel de escopo local
// let nome = "pedro";
// //a declaracao de variavel var criada uma variavel de escopo global 
// var idade = 24;
// //a declaracao de variavel const cria uma variavel de escopo local,
// //porem que o valor nao pode ser alterado
// const cpf = '465.654.978-56'

let nome = prompt("Qual o seu nome ?");

alert("seu nome é " + nome);

let idade = prompt("Ola, " + nome + ". qual a sua idade?");

let aniversario = prompt("Voce ja fez aniversario em 2025?");

if (aniversario == "sim"){
    let nascimento = 2025 - idade;
    alert("voce nasceu em " + nascimento);
}else if(aniversario == "nao"){
    let nascimento = 2024 - idade;
    alert("voce nasceu em " + nascimento);
}else{
    alert("resposta invalida , tentw de novo.");
}