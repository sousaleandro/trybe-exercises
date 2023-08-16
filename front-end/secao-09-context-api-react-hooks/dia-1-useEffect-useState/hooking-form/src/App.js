import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');
  const [module, setModule] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <form action="">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            value={ name }
            onChange={ ({target}) => setName(target.value) }
          />
          <br />
          <label htmlFor="age">Idade</label>
          <input
            type="number"
            id="age"
            value={ age }
            onChange={ ({target}) => setAge(target.value) }
          />
          <br />
          <label htmlFor="location">Cidade</label>
          <input
            type="text"
            id='location'
            value={ location }
            onChange={ ({target}) => setLocation(target.value) }
          />
          <br />
          <label htmlFor="fundamentals">
            Fundamentos
            <input
              type="radio"
              name="module"
              id="fundamentals"
              checked={ module === 'fundamentals' }
              onClick={ () => setModule('fundamentals') }
            />
          </label>
          <label htmlFor="front">
            Front-End
            <input
              type="radio"
              name="module"
              id="front"
              checked={ module === 'front' }
              onClick={ () => setModule('front') }
            />
          </label>
          <label htmlFor="back">
            Back-End
            <input
              type="radio"
              name="module"
              id="back"
              checked={ module === 'back' }
              onClick={ () => setModule('back') }
            />
          </label>
          <label htmlFor="cic">
            Ciência da Computação
            <input
              type="radio"
              name="module"
              id="cic"
              checked={ module === 'cic' }
              onClick={ () => setModule('cic') }
            />
          </label>
          <br />
          <button>Enviar</button>
        </form>
      </header>
    </div>
  );
}

export default App;
