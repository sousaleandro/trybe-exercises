import validator from 'validator';

const textInput = document.querySelector('#camp');
const selector = document.querySelector('#type');
const validateBtn = document.querySelector('#button');
const resultOutput = document.querySelector('#output');

validateBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const camps = {
    cpf: validator.isTaxID(textInput.value, ['pt-BR']),
    email: validator.isEmail(textInput.value),
    birthDate: validator.isDate(textInput.value),
    phoneNumber: validator.isMobilePhone(textInput.value, 'pt-BR'),
    url: validator.isURL(textInput.value),
  };
  
  resultOutput.innerHTML = `Your input validation is ${camps[selector.value]}`
});
