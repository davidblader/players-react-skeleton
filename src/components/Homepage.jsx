import React from 'react';
import { Link } from 'react-router-dom';
import VerticalCenter from './VerticalCenter';
import AnimalCrossingHeader from './AnimalCrossingHeader';
import Button from './Button';

const Homepage = () =>
  (
    <div className="animal-crossing-box">
      <AnimalCrossingHeader>Animal Crossing Fantasy Village</AnimalCrossingHeader>
      <div className="link-btn">
        <Link to="/login" href="/login">
          <Button>Login</Button>
        </Link>
      </div>
      <div className="link-btn">
        <Link to="/register" href="/register">
          <Button>Register</Button>
        </Link>
      </div>
    </div>
  );

export default Homepage;
