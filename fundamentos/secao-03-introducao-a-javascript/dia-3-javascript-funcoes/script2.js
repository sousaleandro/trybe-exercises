let clientesTrybeBank = ['Ada', 'John', 'Gus'];
/* 
function cadastrarCliente(nome) {
  if (typeof nome === 'string') {
    clientesTrybeBank.push(nome);
    return 'Cliente adicionado';
  } else {
    return 'Não é um cliente';
  }
}
console.log(cadastrarCliente('Rui'));
console.log(clientesTrybeBank); */


let tipoVerificado = false;

function verificaTypeof(cliente) {
  if (typeof cliente === 'string') {
    tipoVerificado = true;
  } return tipoVerificado
}

/* console.log(verificaTypeof('Gus'));
console.log(verificaTypeof(199));
console.log(verificaTypeof('Joel')); */

let clienteVerificado = false;

function verificaCliente(cliente) {
  for (let index = 0; index < clientesTrybeBank.length; index += 1) {
    if (cliente === clientesTrybeBank[index]) {
      return true
    }
  } return 'Cliente não encontrado!'
}

/* console.log(verificaCliente(199));
console.log(verificaCliente('Joel'));
console.log(verificaCliente('Gus')); */

//CRIAR FUNÇÃO REMOVER CLIENTE

console.log(removeCliente('Gus'));
console.log(removeCliente(199));
console.log(removeCliente('Joel'));
