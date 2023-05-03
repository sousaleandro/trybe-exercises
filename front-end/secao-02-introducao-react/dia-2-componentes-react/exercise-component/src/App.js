// src/App.js
import React from 'react';
import Album from './components/Album';
import { album01, album02, amelia, joao, users } from './components/data';
import UserProfile from './components/UserProfile';

class App extends React.Component {
  render() {
    // Retorno do que será renderizado
    return (
      <div>
        <UserProfile user={ joao } />
        <UserProfile user={ amelia } />
        <Album album={ album01 } />
        <Album album={ album02 } />
        <div>
          {users.map((user) => <UserProfile user={ user } />)}
        </div>
      </div>
    );
  }
}

export default App;
