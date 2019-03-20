import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logout } from './App';
import Button from './Button';
import AnimalCrossingHeader from './AnimalCrossingHeader';
import AnimalCrossingContainer from './AnimalCrossingContainer';
import Loading from './Loading';

const NoPlayers = () =>
  (
    <p className="animal-crossing-font">You don&#39;t have any neighbors yet!</p>
  );

const PlayersTable = ({ players, deletePlayer }) => {
  // create a headers array to ensure proper order of fields
  const headersArr = ['first_name', 'last_name', 'rating', 'handedness'];
  const headers = headersArr.map(h => (
    <th key={h} className="player-roster-cell">
      {/* below regex replaces underscores with spaces
      & capitalizes the first letter of each word */}
      {h.replace(/(^|_)(\w)/g, ($0, $1, $2) => ($1 && ' ') + $2.toUpperCase())}
    </th>
  ));
  const playerRows = players.map(p => (
    <Player key={p.id} player={p} headers={headersArr} deletePlayer={deletePlayer} />
  ));
  return (
    <table className="player-roster">
      <thead>
        <tr>
          {headers}
        </tr>
      </thead>
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
  const cells = headers.map(h => <td className="player-roster-cell" key={h}>{player[h]}</td>);
  const deleteFunc = () => deletePlayer(player.id);
  const deleteBtn =
    (
      <td key="delete">
        <button className="delete" onClick={deleteFunc}>×</button>
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

const WelcomeMessage = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  let toReturn;
  // don't crash the page if user is not defined
  if (user && user.first_name && user.last_name) {
    const name = `${user.first_name} ${user.last_name}`;
    toReturn = <h2 className="animal-crossing-font">Welcome {name}!</h2>;
  }
  return toReturn;
};

class Roster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      loaded: false,
      redirectToLogin: false,
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
          this.setState({ players: data.players, loaded: true });
          // if server responds with 403 Forbidden, redirect to login
        } else if (data.error.status_code === 403) {
          this.setState({ redirectToLogin: true, loaded: true });
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
    if (!this.state.loaded) {
      return <Loading />;
    }

    if (this.state.redirectToLogin) {
      return <Redirect to="/login" />;
    }

    const players = this.state.players.length > 0
      ? <PlayersTable players={this.state.players} deletePlayer={this.deletePlayer} />
      : <NoPlayers />;
    return (
      <AnimalCrossingContainer id="roster">
        <AnimalCrossingHeader>Neighborhood Roster</AnimalCrossingHeader>
        <WelcomeMessage />
        {players}
        <div className="btn-container">
          <Link to="/player/new" href="/player/new">
            <Button>Add a neighbor</Button>
          </Link>
        </div>
        <div className="btn-container">
          <Button onClick={this.props.logout}>Logout</Button>
        </div>
      </AnimalCrossingContainer>
    );
  }
}

Roster.propTypes = {
  logout: PropTypes.func,
};

Roster.defaultProps = {
  logout,
};

export default Roster;
