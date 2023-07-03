import React, { useState, useEffect } from 'react';
import './App.css';
import emailList from './emailList';

function App() {
  const [emails, setEmails] = useState([])

  useEffect(() => {
    setEmails(emailList)
  }, [])

  useEffect(() => {
    if (emails.every((email) => email.status === 1)) {
      alert('Todos os emails estão lidos')
    }
  }, [emails])

  const handleAllRead = (readStatus) => {
    const newEmails = emails.map((email) => {
      return { ...email, status: readStatus }
    })
    setEmails(newEmails)
  };

  const handleRead = (id, readStatus) => {
    const newEmails = emails.map((email) => {
      if (email.id === id) {
        return { ...email, status: readStatus }
      }
      return email
    })
    setEmails(newEmails)
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>TrybeMail</h1>
        <br />
        <button
          onClick={ () => handleAllRead(1) }
        >
          Todos Lidos
        </button>
        <button
          onClick={ () => handleAllRead(0) }
        >
          Todos Não Lidos
        </button>
        <br />
        {
          emails.map((email) => (
            <div key={email.id}>
              { email.status === 0 && <span data-testid="unread-email">Não lido {'>>>'} </span> }
              <span data-testid="email-title">{email.title} </span>
              <button onClick={ () => handleRead(email.id, 1) }>Lido</button>
              <button onClick={ () => handleRead(email.id, 0) }>Não Lido</button>
            </div>
          ))
        }
      </header>
    </div>
  );
}

export default App;
