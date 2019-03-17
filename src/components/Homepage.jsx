import React from 'react';
import { Link } from 'react-router-dom';
import AnimalCrossingHeader from './AnimalCrossingHeader';
import Button from './Button';
import AnimalCrossingContainer from './AnimalCrossingContainer';
import Image from './Image';

const Homepage = () =>
  (
    <AnimalCrossingContainer>
      <AnimalCrossingHeader>Animal Crossing</AnimalCrossingHeader>
      <AnimalCrossingHeader>Fantasy Village</AnimalCrossingHeader>
      <Image src="villager" />
      <div className="btn-container">
        <Link to="/login" href="/login">
          <Button>Login</Button>
        </Link>
      </div>
      <div className="btn-container">
        <Link to="/register" href="/register">
          <Button>Register</Button>
        </Link>
      </div>
    </AnimalCrossingContainer>
  );

export default Homepage;
