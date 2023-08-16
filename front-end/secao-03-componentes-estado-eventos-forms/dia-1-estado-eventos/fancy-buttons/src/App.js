import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    cliques: 0
  }

  handleClick = () => {
    this.setState((prev) => ({
      cliques: prev.cliques + 1
    }))
  }

  render() {
    const { cliques } = this.state
    return <button onClick={() => this.handleClick() }>{ cliques }</button>
  }
}

export default App;