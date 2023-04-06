const numbers = [50, 85, -30, 3, 15];

const biggerNumber = numbers.reduce((acc, curr) => acc > curr ? acc : curr);

console.log(biggerNumber);
