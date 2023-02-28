let a = 10
let b = 4

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

if (a > b) {
    console.log(a);
} else if (b > a) {
    console.log(b);
} else {
    console.log('Os números são iguais');
}

//

let c = 99;

if (c > a && c > b) {
    console.log(c);
} else if (b > a && b > c) {
    console.log(b);
} else if (a > b && a > c) {
    console.log(a);
}

//

if (a > 0) {
    console.log('positive');
} else if (a < 0) {
    console.log('negative');
} else {
    console.log('zero');
}

//

let aAngle = 40;
let bAngle = 60;
let cAngle = 80;
let allAngles = aAngle + bAngle + cAngle;
let triangle;

if (allAngles === 180) {
    triangle = true;
} else {
    triangle = false;
}
console.log(triangle);

//

let chessPiece = 'KING';
let movement;

switch (chessPiece.toLowerCase()) {
    case 'queen':
        movement = 'any block all sides';
        break
    case 'king':
        movement = 'one block all sides';
        break
    case 'tower':
        movement = 'any block all sides except diagonal';
        break
    default:
        console.log('Wrong chess piece');
}
console.log('The ' + chessPiece + ' moves ' + movement)

//

let percentage = 100;
let grade;

if (percentage >= 90 && percentage <=100) {
    grade = 'A';
} else if (percentage >= 80 && percentage < 90) {
    grade = 'B';
} else if (percentage >= 70 && percentage < 80) {
    grade = 'C';
} else if (percentage >= 60 && percentage < 70) {
    grade = 'D';
} else if (percentage >= 50 && percentage < 60) {
    grade = 'E';
} else if (percentage >= 0 && percentage < 50) {
    grade = 'F';
} else {
    grade =  'Invalid grade'
}
console.log(grade);

//

let par;

if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
    par = true;
} else {
    par = false;
}
console.log(par);

//

let impar;

if (a % 2 != 0 || b % 2 != 0 || c % 2 != 0) {
    impar = true;
} else {
    impar = false;
}
console.log(impar);

//

let sellPrice = 12;
let costPrice = 7;
let profit;

if (sellPrice > costPrice) {
    profit = sellPrice - costPrice * 1.2;
} else {
    console.log('Not good business!');
}
let productionProfit =  profit * 1000;
console.log(productionProfit);