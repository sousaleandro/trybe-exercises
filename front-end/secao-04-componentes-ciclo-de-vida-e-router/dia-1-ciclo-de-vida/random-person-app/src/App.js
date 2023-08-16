import React, { Component } from 'react';
import './App.css';

const API_URL = 'https://api.randomuser.me';
const limitAge = 50;

class App extends Component {
  state = {
    random: undefined,
    loading: true,
    allRandoms: [],
  };

  async componentDidMount() {
    console.log('montou');
    await this.fetchRandom();
  }

  shouldComponentUpdate(_nextProps, nextState) {
    if (nextState.random[0].dob.age < limitAge) return true;
  }

  fetchRandom = async () => {
    const request = await fetch(API_URL);
    const data = await request.json();
    this.setState(() => ({
      loading: false,
      random: data.results,
    }))
  }

  render() {
    const { loading, random } = this.state;
    // const { name: { title, first, last }, email, dob: { age }, picture: { medium } } = random[0];
    console.log('renderizou');
    if (loading) return <p>Loading...</p>;
    return (
      <div>
        <img src={random[0].picture.medium} alt={random[0].name.first} />
        <p>{`${random[0].name.title} ${random[0].name.first} ${random[0].name.last}`}</p>
        <p>{random[0].email}</p>
        <p>{random[0].dob.age}</p>
      </div>
    );
  }
}

export default App;
