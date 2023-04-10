// ARRAY DESTRUCTURING

const primeNumbers = [17, 23, 37];

const [primeNumber1, primeNumber2, primeNumber3] = primeNumbers;

const sum = (a, b) => {
  console.log(a + b);
}

sum(primeNumber1, primeNumber3) // 54

// Produza o mesmo resultado acima, porém utilizando array destructuring

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

let array = [comida, animal, bebida];

[ animal, bebida, comida ] = array

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

[,,, ...numerosPares] = numerosPares;

console.log(numerosPares); // [6, 8, 10, 12];

// OBJECT DESTRUCTURING

// Utilize array destructuring para produzir o resultado esperado pelo console.log acima

// const person = {
//   name: 'João',
//   lastName: 'Jr',
//   age: 34,
// };

// const { nationality = 'Brazilian' } = person;
// console.log(nationality);

// Agora a pratica

const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};


console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));

// OBJECT PROPERTY SHORTHAND

const newUser = (id, name, email) => {
  return {
    id,
    name,
    email,
  };
};

console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

// Agora a pratica

const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,
});

console.log(getPosition(-19.8157, -43.9542));

// DEFAULT PARAMETERS

const greeting = (user = 'pessoa usuária') => console.log(`Welcome ${user}!`);

greeting(); // // Welcome pessoa usuária!

// Agora a pratica

const multiply = (number, value = 1) => {
  return number * value;
};

console.log(multiply(8));
