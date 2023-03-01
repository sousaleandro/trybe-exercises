let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}

let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
  soma += numbers[index]
}
console.log(soma);

let media = soma / numbers.length;

console.log(media);

if (media > 20) {
  console.log('Valor maior que 20');
} else {
  console.log('Valor menor que 20');
}

console.log(Math.max.apply(null, numbers));

let impares= 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 != 0) {
    impares += 1;
  }
}
console.log(impares);

console.log(Math.min.apply(null, numbers));

let newNumbers = [];

for (let index = 1; index <= 25; index += 1) {
  newNumbers.push(index)
}

console.log(newNumbers);

for (let index = 0; index < newNumbers.length; index += 1) {
  console.log(newNumbers[index] / 2)
}