import React from 'react';

class Form extends React.Component {
  render() {
    const { handleChanges, name, phone, cars, sub } = this.props;
    return (
      <form>
        <label htmlFor="cars">Choose a car: </label>
        <select
          onChange={handleChanges}
          id="cars"
          name="cars"
          value={cars}
        >
          <option value="selected">Select One Option</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>
        <label htmlFor="name">Text your name</label>
        <input
          onChange={handleChanges}
          name="name"
          type="text"
          id="name"
          value={name}
        />
        <label htmlFor="phone">Text your phone number</label>
        <input
          onChange={handleChanges}
          name="phone"
          type="number"
          id="phone"
          value={phone}
        />
        <label htmlFor="sub">Subscribe: </label>
        <input
          onChange={handleChanges}
          type="checkbox"
          name="sub"
          id="sub"
          value={sub} />
        <button type="submit">Confirm Informations</button>
      </form>
    )
  }
}

export default Form;
