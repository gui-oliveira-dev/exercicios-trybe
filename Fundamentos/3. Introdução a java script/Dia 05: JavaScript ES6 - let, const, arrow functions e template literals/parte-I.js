// muda var para o tipo de variavel correto

function imprimeIdade() {
  for (let idade = 30; idade <= 40; idade += 1) {
    console.log('Idade dentro do for:', idade)
  }
}
imprimeIdade()

// alterar propriedades para respeitar o const

  // Executando esse código, recebe-se um erro `TypeError: Assignment to constant variable.`
  
  console.log('----------');

  let pessoa = {
    nome: 'Henri',
    idade: 20
  }
  pessoa = {
    nome: 'Luna',
    idade: 19
  } // Altere essa estrutura para corrigir o erro.
  console.log('Nome:', pessoa.nome);
  console.log('Idade:', pessoa.idade);


// Corrija erro

console.log('----------');

let favoriteFood = 'Lasanha';
favoriteFood = 'Hambúrguer';
console.log(favoriteFood);

// Concatene com template literals

console.log('----------');

const name = 'Adriana';
const lastName = 'Soares';
console.log(`Olá ${name} ${lastName}!`);
function soma(a,b) {
  let resultado = a + b;
  return resultado;
}
let a = 3;
let b = 5;
console.log(`O resultado da soma de ${a} + ${b} é ${a + b}`);


// Mude a função numeroAleatório para arrow functions

console.log('----------');

const numeroAleatorio = () => Math.random()

console.log(numeroAleatorio());

// Mude a função hello para arrow function tbm

console.log('----------');

// function hello(nome) {
//   return `Olá, ${nome}!`
// }
let nome = 'Ivan';

const hello = (nome) => `Olá ${nome}`

console.log(hello(nome));

// Mude a função nomeCompleto para arrow function

console.log('----------');

// function nomeCompleto(nome, sobrenome) {
//   return `${nome} ${sobrenome}`
// }
// let nome = 'Ivan';
let sobrenome = 'Pires';


const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`

console.log(nomeCompleto(nome, sobrenome));

// Mude if/else para um ternary operator

console.log('----------');

let speed = 90;
// const speedCar = (speed) => {
//   if (speed >= 120) {
//     return `Você ultrapassou o limite de velocidade`;
//   } else {
//     return `Você está na velocidade permitida`;
//   }
// };
// console.log(speedCar(speed));

const speedCar = (speed >= 120) ? `você ultapassou o limite de velocidade` : `você está na velocidade permitida`

console.log(speedCar);