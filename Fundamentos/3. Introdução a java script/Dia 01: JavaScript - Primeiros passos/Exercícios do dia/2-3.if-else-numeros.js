/* Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas variáveis com os valores que serão comparados. */

let num1 = 75
let num2 = 50

if (num1 > num2) {
  console.log("numero 1 é maior q numero 2");
} else {
 console.log("numero 2 é maior que número 1");
}



/* Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados.*/

let a = 11
let b = 10
let c = 10

if (a > b && a > c) {
  console.log("numero a é o maior");
}
else if (b > a && b > c) {
  console.log("numero b é o maior");
}
else if (c > a && c > b) {
  console.log("numero c é o maior");
}
else {
  console.log("os numeros são iguais");
}