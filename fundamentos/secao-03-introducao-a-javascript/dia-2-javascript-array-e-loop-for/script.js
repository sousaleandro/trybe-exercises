let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

//

let indexOfPortfolio = menu.indexOf('Home');

console.log(indexOfPortfolio);

//

menu.push('Contato');

console.log(menu);

//

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index += 1) {
  console.log(groceryList[index])
}

//

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let name of names) {
  console.log(name);
}

//

let fruits = [3, 4, 10, 1, 12];
let soma = 0;

for (let index = 0; index < fruits.length; index += 1) {
  soma += fruits[index];
} if (soma > 15) {
  console.log(soma);
} else {
  console.log('Valor menor que 16')
}