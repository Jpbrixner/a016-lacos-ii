/*Crie um programa que peça um input de número para o usuário. Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.

**Utilize o for...in para resolver** */

const numero = +prompt("Digite um número");
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i in array) {
  console.log(`${numero} x ${Number(i) + 1} = ${numero * (Number(i) + 1)}`);
}
