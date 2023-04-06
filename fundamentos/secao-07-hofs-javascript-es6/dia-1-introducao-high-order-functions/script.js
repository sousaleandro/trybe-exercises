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

console.log(newEmployees(genEmail));