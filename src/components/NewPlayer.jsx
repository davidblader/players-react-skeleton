import React from 'react';
import { Redirect } from 'react-router-dom';
import AnimalCrossingHeader from './AnimalCrossingHeader';
import AnimalCrossingContainer from './AnimalCrossingContainer';

class NewPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newPlayer: {},
      error: {},
      success: null,
    };
    this.getUserError = this.getUserError.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getUserError() {
    const userErrors = {
      'Resource already exists.': 'This neighbor already exists!',
    };
    return userErrors[this.state.error.message] || this.state.error.message;
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
        if (data.success === false) {
          console.log(data.error);
          this.setState({ error: data.error });
        }
        this.setState({ success: data.success });
      });
  }

  handleChange(e) {
    const { newPlayer } = this.state;
    newPlayer[e.target.name] = e.target.value;
    this.setState({ newPlayer });
  }

  render() {
    let errorMessage;
    if (this.state.success === true) {
      return <Redirect to="/roster" />;
    } else if (this.state.success === false) {
      errorMessage = <p className="error-msg">{this.getUserError()}</p>;
    }
    return (
      <AnimalCrossingContainer>
        <AnimalCrossingHeader>New Villager</AnimalCrossingHeader>
        {errorMessage}
        <form onSubmit={this.handleSubmit}>
          <div>
            <span className="hide">First Name</span>
            <input id="firstName" type="text" placeholder="First Name" name="first_name" onChange={this.handleChange} required />
          </div>
          <div>
            <span className="hide">Last Name</span>
            <input id="lastName" type="text" placeholder="Last Name" name="last_name" onChange={this.handleChange} required />
          </div>
          <div>
            <span className="hide">Rating</span>
            <input id="rating" type="number" placeholder="Rating" name="rating" onChange={this.handleChange} min="0" max="10000" required />
          </div>
          <div>
            <span className="hide">Handedness</span>
            <select id="handedness" name="handedness" onChange={this.handleChange}>
              <option value="">Handedness</option>
              <option value="left">Left</option>
              <option value="right">Right</option>
            </select>
          </div>
          <div className="btn-container">
            <input id="create" className="animal-crossing-btn" type="submit" />
          </div>
        </form>
      </AnimalCrossingContainer>
    );
  }
}

export default NewPlayer;
