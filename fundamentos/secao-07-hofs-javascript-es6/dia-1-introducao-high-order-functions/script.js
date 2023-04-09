// Gerador de Email

const genEmail = (employeeFullName) => {
  const joinName = employeeFullName.toLowerCase().replace(' ', '_');
  return `${joinName}@trybe.com`;
};

const newEmployees = (genEmail) => {
  const employees = {
    id1: genEmail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: genEmail('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: genEmail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

// Sorteador de numero

const tryYourLuck = (number) => {
  const rdmNmb = Math.floor(Math.random() * (5 - 1 + 1) + 1);
  if (typeof number === 'number' && number <= 5 && number > 0) { 
    return number === rdmNmb ? 'Parabéns, você ganhou!' : 'Tente novamente!';
  } 
  return 'Digite um número entre 1 e 5';
};

// Corretor automatico de exame


console.log(points);