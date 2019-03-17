import React from 'react';
import AnimalCrossingHeader from './AnimalCrossingHeader';
import AnimalCrossingContainer from './AnimalCrossingContainer';

class NewVillager extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: {} };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    const url = 'https://animalcrossing.fandom.com/api.php?action=query&titles=Villager%20list%20(New%20Leaf)&prop=links&format=json';
    const options = {
      mode: 'no-cors',
      'Content-Type': 'application/json',
      'X-Content-Type-Options': 'nosniff',
    };
    fetch(url, options)
      .then(resp => resp.json())
      .then((data) => {
        this.setState({ data });
      });
  }

  render() {
    const renderedData = Object.keys(this.state.data).map(d =>
      <div key={d}>{this.state.data[d]}</div>);
    return (
      <React.Fragment>
        <AnimalCrossingContainer>
          <AnimalCrossingHeader>Work in Progress</AnimalCrossingHeader>
        </AnimalCrossingContainer>
        {renderedData}
      </React.Fragment>
    );
  }
}

export default NewVillager;
