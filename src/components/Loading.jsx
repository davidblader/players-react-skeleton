import React from 'react';
import Image from './Image';
import AnimalCrossingContainer from './AnimalCrossingContainer';
import AnimalCrossingHeader from './AnimalCrossingHeader';

const Loading = () => (
  <AnimalCrossingContainer>
    <AnimalCrossingHeader>Loading...</AnimalCrossingHeader>
    <Image src="gyroid" />
  </AnimalCrossingContainer>
);

export default Loading;
