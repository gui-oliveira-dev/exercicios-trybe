/* Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.

Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

Como dica, você pode pesquisar uma função que faça uma string ficar com todas as letras minúsculas (lower case).

Se a peça passada for inválida, o código deve retornar uma mensagem de erro.

Exemplo: bishop (bispo) -> diagonals (diagonais) */

let peça = "bispo";

switch (peça) {
  case 'torre':
    console.log("Linha reta, quantas casas ele quiser");
    break;
  
  case 'bispo':
    console.log("Diagonais, quantas casas ele quiser");
    break;
  
  case 'cavalo':
    console.log("Faz o L");
    break;

  case 'rei':
    console.log("Em todas as direções, apenas 1 casa");
    break;

  case 'rainha':
    console.log("Em todas as direções, quantas casas ela quiser");
    break;

  case 'peao':
    console.log("Apenas 1 casa para frente, e 2 na primeira jogada");
    break;

  default:
    console.log("insira uma peça válida");
    break;
}