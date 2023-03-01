let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function cadastrarCliente(nome) {
  if (typeof nome === 'string') {
    clientesTrybeBank.push(nome);
    return 'Cliente adicionado';
  } else {
    return 'Não é um cliente';
  } 
}
console.log(cadastrarCliente('Rui'));
console.log(clientesTrybeBank);

