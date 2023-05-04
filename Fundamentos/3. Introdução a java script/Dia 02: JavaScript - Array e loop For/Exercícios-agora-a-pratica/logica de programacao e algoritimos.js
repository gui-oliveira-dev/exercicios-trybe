/*fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
Copiar
O fatorial é representado pelo sinal !
4! = 4 x 3 x 2 x 1 = 24
Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10. */

let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
  fatorial *= index
 console.log(fatorial);
 console.log('----------');
}
console.log('O fatorial de 10 é: ' + fatorial);
console.log('----------');


/* Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra, como a palavra “banana” para “ananab”. Utilize a string abaixo como exemplo. Depois, troque-a por outras para verificar se seu algoritmo está funcionando corretamente.
Copiar
let word = 'tryber'; */

let word = 'tryber';
let reverseWord = '';

for (let index = 0; index < word.length; index += 1) {
  reverseWord += word[word.length - 1 - index]
}
console.log('A palavra normal é: ' + word);
console.log('A palavra reversa é: ' + reverseWord);