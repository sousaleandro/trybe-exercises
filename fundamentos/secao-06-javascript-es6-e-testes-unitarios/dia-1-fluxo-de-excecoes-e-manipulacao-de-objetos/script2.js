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
  try {
    checkInfo(name, age);
    checkAge(name, age);
    return `${name}, seja bem-vindo(a) à AuTrybe!`;
  } catch (erro) {
    return erro.message;
  }
};

studentRegister('Tristan', 32);
studentRegister('Gavi', 17);
studentRegister('Andrew',);
