import React from 'react';
import { Link } from 'react-router-dom';
import AnimalCrossingHeader from './AnimalCrossingHeader';
import Button from './Button';
import AnimalCrossingContainer from './AnimalCrossingContainer';

const Homepage = () =>
  (
    <AnimalCrossingContainer>
      <AnimalCrossingHeader>Animal Crossing Fantasy Village</AnimalCrossingHeader>
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
