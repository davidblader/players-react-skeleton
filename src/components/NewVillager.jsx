import React from 'react';
import AnimalCrossingHeader from './AnimalCrossingHeader';
import AnimalCrossingContainer from './AnimalCrossingContainer';

class NewVillager extends React.Component {
  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
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
      .then((data) => { console.log(data); });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <AnimalCrossingContainer>
        <AnimalCrossingHeader>Work in Progress</AnimalCrossingHeader>
      </AnimalCrossingContainer>
    );
  }
}

export default NewVillager;
