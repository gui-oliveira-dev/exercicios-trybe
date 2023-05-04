// Saída de todos os valores

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;
let media = 278 / numbers.length;
let higherNumber = 5;
let smallNumber = 5;

console.log(numbers);


// saida das somas

for (let index = 0; index < numbers.length; index += 1) {
  result += numbers[index]
  
}
console.log('-----------');
console.log('a soma dos valores é: ' + result);


// saida da média aritimética

console.log('----------');
console.log(`A media aritimetica é: ${result / numbers.length}`);


// saida dizendo se a média é maior ou menor q 20

console.log('----------');

if (media > 20) {
  console.log('A média é maior que 20');
} else {
  console.log('A média é igual ou menor que 20');
}


// qual o maior numero

console.log('----------');

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > higherNumber) {
    higherNumber = numbers[index]
  }
}

console.log('O maior número é: ' + higherNumber);

// qual o menor numero

console.log('----------');

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] < smallNumber) {
    smallNumber = numbers[index]
  } 
}

console.log('O menor número é: ' + smallNumber);


// crie numeros de 1 a 25 com o for

console.log('------------');

let numFor = []

for (let index = 1; index <= 25; index += 1) {
  numFor.push(index)
}

console.log(numFor);

console.log('----------');


// numeros criador por for divididos por 2
 
for (let index = 1; index <= 25; index += 1) {
  console.log(numFor[index] / 2);
}