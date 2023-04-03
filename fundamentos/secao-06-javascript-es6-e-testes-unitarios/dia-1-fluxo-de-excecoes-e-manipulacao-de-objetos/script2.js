const checkInfo = (name, age) => {
  if (!name || !age) {
    throw new Error('Todas as informações são necessárias');
  }
};

const checkAge = (name, age) => {
  if (name && age < 18) {
    throw new Error('Ops, infelizmente nesse momento você não pode fazer as aulas');
  }
};

const studentRegister = (name, age) => {
  checkInfo(name, age);
  checkAge(name, age);
  return `${name}, seja bem-vindo(a) à AuTrybe!`;
};
console.log(studentRegister('Gavi', 17));
// studentRegister('Tristan', 32);
// studentRegister('Gavi', 17);
// studentRegister('Andrew',);
