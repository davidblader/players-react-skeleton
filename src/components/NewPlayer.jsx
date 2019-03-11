import React from 'react';
import { Redirect } from 'react-router-dom';

class NewPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newPlayer: {},
      error: {},
      success: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch(
      'https://players-api.developer.alchemy.codes/api/players',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('JWT')}`,
          'Content-type': 'application/json',
        },
        body: JSON.stringify(this.state.newPlayer),
      },
    ).then(resp => resp.json())
      .then((data) => {
        this.setState({ success: data.success });
        if (data.success === false) {
          this.setState({ error: data.error });
        }
      });
  }

  handleChange(e) {
    const { newPlayer } = this.state;
    newPlayer[e.target.name] = e.target.value;
    this.setState({ newPlayer });
  }

  render() {
    if (this.state.success === true) {
      return <Redirect to="/roster" />;
    }
    return (
      <div>
        New Villager
        <form onSubmit={this.handleSubmit}>
          <div>First Name <input id="firstName" type="text" name="first_name" onChange={this.handleChange} required /></div>
          <div>Last Name <input id="lastName" type="text" name="last_name" onChange={this.handleChange} required /></div>
          <div>Rating <input id="rating" type="number" name="rating" onChange={this.handleChange} min="0" max="10000" required /></div>
          <div>
            Handedness
            <select id="handedness" name="handedness">
              <option value="left">Left</option>
              <option value="right">Right</option>
            </select>
          </div>
          <div><input id="create" type="submit" /></div>
        </form>
      </div>
    );
  }
}

export default NewPlayer;
