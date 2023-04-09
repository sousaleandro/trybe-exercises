// loginValidation.js
const greetingMessage = (user) => `Hello, ${user}! Que bom ter você de volta`;
const loginErrorMessage = (user) => `Pessoa usuária ${user} não encontrada, tente novamente!`;

// const user = {
//   userName: 'Joana',
//   password: 123456,
// };

const verifyCredentials = (userInfo) => {
  const uName = userInfo.userName;
  const pwd = userInfo.password;
  if (pwd === 123456 && uName === 'Joana') {
    return greetingMessage(uName);
  }
  return loginErrorMessage(uName);
};
module.exports = { greetingMessage, loginErrorMessage, verifyCredentials };
