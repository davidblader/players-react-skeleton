import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Player = (props) => {
  const cells = Object.keys(props).map(k => (k !== 'id' ? <td>{props[k]}</td> : null));
  return (
    <tr>
      {cells}
    </tr>
  );
};

class Roster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
    };
  }

  componentDidMount() {
    fetch('https://players-api.developer.alchemy.codes/api/players', {
      headers: { Authorization: `Bearer ${localStorage.getItem('JWT')}` },
    }).then(resp => resp.json())
      .then((data) => {
        if (data.success) {
          this.setState({ players: data.players });
        }
      });
  }

  render() {
    const players = this.state.players.map(p => <Player {...p} />);
    return (
      <div>
        Neighbors
        {players}
        <Link to="/player/new" href="/player/new">
          <Button>Add a neighbor</Button>
        </Link>
      </div>
    );
  }
}


export default Roster;
