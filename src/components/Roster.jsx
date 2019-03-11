import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from './Button';

const Player = (props) => {
  const cells = Object.keys(props).map(k => (k !== 'id' && k !== 'deletePlayer' ? <td>{props[k]}</td> : null));
  cells.push(<td><button className="delete" onClick={() => props.deletePlayer(props.id)}>Delete</button></td>);
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

  render() {
    const players = this.state.players.map(p => <Player {...p} deletePlayer={this.deletePlayer} />);
    return (
      <div>
        Neighborhood Roster
        {players}
        <Link to="/player/new" href="/player/new">
          <Button>Add a neighbor</Button>
        </Link>
      </div>
    );
  }
}


export default Roster;
