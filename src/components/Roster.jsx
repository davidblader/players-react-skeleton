import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from './Button';
import AnimalCrossingHeader from './AnimalCrossingHeader';

const NoPlayers = () =>
  (
    <p className="animal-crossing-font">You don't have any neighbors yet!</p>
  );

const PlayersTable = ({ players, deletePlayer }) => {
  // create a headers array to ensure proper order of fields
  const headersArr = ['first_name', 'last_name', 'rating', 'handedness'];
  const headers = headersArr.map(h => (
    <th>
      {h.replace(/(^|_)(\w)/g, ($0, $1, $2) => ($1 && ' ') + $2.toUpperCase())}
    </th>
  ));
  const playerRows = players.map(p => (
    <Player player={p} headers={headersArr} deletePlayer={deletePlayer} />
  ));
  return (
    <table className="player-roster">
      {headers}
      <tbody>
        {playerRows}
      </tbody>
    </table>
  );
};

PlayersTable.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
  deletePlayer: PropTypes.func.isRequired,
};

const Player = ({ player, headers, deletePlayer }) => {
  const cells = headers.map(h => <td key={h}>{player[h]}</td>);
  const deleteFunc = () => deletePlayer(player.id);
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
  player: PropTypes.shape({
    id: PropTypes.string.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    handedness: PropTypes.oneOf(['left', 'right']).isRequired,
  }).isRequired,
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
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
    const players = this.state.players.length > 0
      ? <PlayersTable players={this.state.players} deletePlayer={this.deletePlayer} />
      : <NoPlayers />;
    return (
      <div className="animal-crossing-box">
        <AnimalCrossingHeader>Neighborhood Roster</AnimalCrossingHeader>
        {players}
        <div className="btn-container">
          <Link to="/player/new" href="/player/new">
            <Button>Add a neighbor</Button>
          </Link>
        </div>
        <div className="btn-container">
          <Button onClick={this.props.logout}>Logout</Button>
        </div>
      </div>
    );
  }
}

Roster.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default Roster;
