//Segundo Desafio
document.querySelector('h1').innerHTML = 'Hora do Desafio';

//Terceiro Desafio 
// Função foi adicionada ou Botão "Console"
function exibirMsgNoConsole(){
  console.log('O botão foi clicado.');
}

//Quarto Desafio
// Função adicionada ao Botão "Alerta"
function exibirMsgAlerta(){
  alert('Eu amo JS');
}

//Quinto Desafio
// Função adicionada ao Botão "Prompt"
function exibirMsgPrompt(){
  let cidade = prompt('Digite o nome de uma cidade do Brasil: ');
  alert(`Estive em ${cidade} e lembrei de você.`);
}

//Sexto Desafio
// Função adicionada ao Botão "Soma"
function exibirSoma(){
  let num1 = parseInt(prompt('Digite um número inteiro: '));
  let num2 = parseInt(prompt('Digite outro número inteiro: '));

  alert(`${num1} + ${num2} = ${num1+num2}`);
}