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
          <div><input type="text" name="first_name" placeholder="First name" onChange={this.handleChange} required /></div>
          <div><input type="text" name="last_name" placeholder="Last name" onChange={this.handleChange} required /></div>
          <div><input type="number" name="rating" placeholder="Rating" onChange={this.handleChange} required /></div>
          <div>
            <label htmlFor="hand-left">
              <input id="hand-left" type="radio" name="handedness" value="left" onChange={this.handleChange} required />
              Left
            </label>
            <label htmlFor="hand-right">
              <input id="hand-right" type="radio" name="handedness" value="right" onChange={this.handleChange} required />
              Right
            </label>
          </div>
          <div><input type="submit" /></div>
        </form>
      </div>
    );
  }
}

export default NewPlayer;
