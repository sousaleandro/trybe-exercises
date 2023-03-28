const clients = [
  {
    name: 'João da Silva',
    age: 28,
    email: 'joao.silva@gmail.com',
    phone: '(11) 5555-5555',
    address: {
      street: 'Rua dos Lírios',
      number: 123,
      neighborhood: 'Jardim Primavera',
      city: 'São Paulo',
      state: 'SP',
      cep: '01234-567',
    },
  },
  {
    name: 'Maria Souza',
    age: 35,
    email: 'maria.souza@hotmail.com',
    address: {
      street: 'Rua dos Cravos',
      number: 456,
      neighborhood: 'Copacabana',
      city: 'Rio de Janeiro',
      state: 'RJ',
      cep: '12345-678',
    },
  },
  {
    name: 'Pedro Oliveira',
    age: 42,
    email: 'pedro.oliveira@gmail.com',
    address: {
      street: 'Rua das Margaridas',
      number: 789,
      neighborhood: 'Boa Viagem',
      city: 'Recife',
      state: 'PE',
      cep: '23456-789',
    },
  },
  {
    name: 'Ana Santos',
    age: 25,
    email: 'ana.santos@gmail.com',
    phone: '(71) 5555-5555',
    address: {
      street: 'Rua dos Girassóis',
      number: 1011,
      neighborhood: 'Barra',
      city: 'Salvador',
      state: 'BA',
      cep: '34567-890',
    },
  },
  {
    name: 'Luiz Costa',
    age: 32,
    email: 'luiz.costa@hotmail.com',
    address: {
      street: 'Rua das Acácias',
      number: 1213,
      neighborhood: 'Centro',
      city: 'Belo Horizonte',
      state: 'MG',
      cep: '45678-901',
    },
  },
  {
    name: 'Isabela Almeida',
    age: 37,
    email: 'isabela.almeida@gmail.com',
    phone: '(21) 5555-5555',
    address: {
      street: 'Rua das Hortênsias',
      number: 1415,
      neighborhood: 'Botafogo',
      city: 'Rio de Janeiro',
      state: 'RJ',
      cep: '56789-012',
    },
  },
  {
    name: 'Rafael Ferreira',
    age: 29,
    email: 'rafael.ferreira@hotmail.com',
    address: {
      street: 'Rua das Orquídeas',
      number: 1617,
      neighborhood: 'Pinheiros',
      city: 'São Paulo',
      state: 'SP',
      cep: '67890-123',
    },
  },
];

const checkPersonName = (name) => {
  let getPerson;
  clients.forEach((clients) => {
    if (name === clients.name) {
      getPerson = clients.name;
    }
  })
  if (!getPerson) {
    throw new Error(('Pessoa não encontrada, tente novamente'));
  }
};


const findPersonByName = (name) => {
  try {
    checkPersonName(name);
    clients.forEach((clients) => {
      if (name === clients.name)
        return console.log(`Destinatário: ${clients.name}. Endereço: ${clients.address.street}, ${clients.address.number}, ${clients.address.neighborhood}, ${clients.address.city} - ${clients.address.state}. CEP: ${clients.address.cep}`);
    })
  } catch (erro) {
    return console.log(erro.message);
  }
};

const checkPersonPosition = (position) => {
  if (position < 0 || position >= clients.length) {
    throw new Error('Posição inválida, tente novamente');
  }
};

const findPersonByPosition = (position) => {
  try {
    checkPersonPosition(position);
    return console.log(`Cliente: ${clients[position].name}. email: ${clients[position].email}`)
  } catch (erro) {
    return console.log(erro.message);
  }
};

const checkPersonState = (state) => {
  const people = [];
  clients.forEach((clients) => {
    if (clients.address.state === state) {
      people.push(clients.name)
    }
  })
  if (people.length < 1) {
    throw new Error('Ops, nenhuma pessoa mora nesse estado, tente outro');
  }
};

const findPeopleByState = (state) => {
  try {
    checkPersonState(state);
    const people = [];
    clients.forEach((clients) => {
      if (clients.address.state === state) {
        people.push(clients.name)
      }
    })
    return console.log(people);
  } catch (erro) {
    return console.log(erro.message);
  }
};

findPeopleByState('SP');
findPeopleByState('AM');
