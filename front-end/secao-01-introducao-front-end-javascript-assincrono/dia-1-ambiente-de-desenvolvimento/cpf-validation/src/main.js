import validator from 'validator';

const textInput = document.querySelector('#camp-input');
const selection = document.querySelector('#type-input');
const validateBtn = document.querySelector('#validate-button');
const resultOutput = document.querySelector('#result-output');

validateBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const camps = {
    cpf: validator.isTaxID(textInput.value, ['pt-BR']),
    email: validator.isEmail(textInput.value),
    birthDate: validator.isDate(textInput.value, { format: 'DD/MM/YYY', delimiters: ["/"], strictMode: true  }),
    phoneNumber: validator.isMobilePhone(textInput.value ['pt-BR']),
    url: validator.isURL(textInput.value)
  }
  resultOutput.innerHTML = `Your input validation is ${camps[selection.value]}`
})