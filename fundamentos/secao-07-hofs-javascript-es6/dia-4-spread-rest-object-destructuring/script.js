// Exercicio 1

const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  console.log(rectangleArea(...rectangle)); // Altere o parâmetro recebido por rectangleArea()
});

// Exercicio 2

const sum = (...arr) => arr.reduce((acc, crr) => acc + crr, 0);

console.log(sum(4, 5, 6));

// Exercicio 3