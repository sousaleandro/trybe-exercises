let saldo = 5000;

function deposito(dinheiro) {
  return saldo += dinheiro;  
}

console.log(deposito(500))

function debito(dinheiro) {
  return saldo -= dinheiro;  
}

console.log(debito(400))

function bonus(rendimento) {
  return saldo = saldo * rendimento;  
}

console.log(bonus(1.1));

function imposto(aliquota) {
  return saldo = saldo / aliquota;
}

console.log(imposto(1.2))