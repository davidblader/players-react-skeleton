import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from './Button';

const Player = (props) => {
  const mapCallback = k =>
    (
      k !== 'id' && k !== 'deletePlayer' ? <td key={k}>{props[k]}</td> : null
    );
  const cells = Object.keys(props).map(mapCallback);
  const deleteFunc = () => props.deletePlayer(props.id);
  const deleteBtn =
    (
      <td key="delete">
        <button className="delete" onClick={deleteFunc}>Delete</button>
      </td>
    );
  cells.push(deleteBtn);
  return (
    <tr>
      {cells}
    </tr>
  );
};

Player.propTypes = {
  id: PropTypes.string.isRequired,
  deletePlayer: PropTypes.func.isRequired,
};

class Roster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
    };

    this.fetchData = this.fetchData.bind(this);
    this.deletePlayer = this.deletePlayer.bind(this);
    this.getPlayerTable = this.getPlayerTable.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch('https://players-api.developer.alchemy.codes/api/players', {
      headers: { Authorization: `Bearer ${localStorage.getItem('JWT')}` },
    }).then(resp => resp.json())
      .then((data) => {
        if (data.success) {
          this.setState({ players: data.players });
        }
      });
  }

  deletePlayer(id) {
    fetch(`https://players-api.developer.alchemy.codes/api/players/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${localStorage.getItem('JWT')}` },
    }).then(resp => resp.json())
      .then(() => this.fetchData());
  }

  getPlayerTable() {
    const mapCallback = p => <Player key={p.id} {...p} deletePlayer={this.deletePlayer} />;
    return this.state.players.map(mapCallback);
  }

  render() {
    const players = this.state.players.length > 0
      ? this.getPlayerTable()
      : <div>You don't have any neighbors yet!</div>;
    return (
      <div>
        Neighborhood Roster
        {players}
        <Link to="/player/new" href="/player/new">
          <Button>Add a neighbor</Button>
        </Link>
        <div>
          <Button onClick={this.props.logout}>Logout</Button>
        </div>
      </div>
    );
  }
}


export default Roster;
