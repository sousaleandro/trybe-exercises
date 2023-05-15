import React from "react";
import Form from "./components/Form";

class App extends React.Component {
  state = {
    name: '',
    phone: '',
    cars: '',
    sub: false,
  }

  handleChanges = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState(() => ({
      [name]: value
    }));
  }
  render() {
    const { name, phone, cars, sub } = this.state;
    return (
      <div className="App">
        <Form
          name={name}
          phone={phone}
          cars={cars}
          handleChanges={this.handleChanges}
          sub={sub}
        />
      </div>
    );
  }
}

export default App;
