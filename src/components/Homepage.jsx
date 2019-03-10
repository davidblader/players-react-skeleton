import React from 'react';
import { Link } from 'react-router-dom';
import VerticalCenter from './VerticalCenter';
import AnimalCrossingHeader from './AnimalCrossingHeader';
import Button from './Button';

const Homepage = () =>
  (
    <VerticalCenter>
      <div id="homepage">
        <AnimalCrossingHeader>Animal Crossing Fantasy Village</AnimalCrossingHeader>
        <div className="link-btn">
          <Link to="/login" href="/login">
            <Button>Login</Button>
          </Link>
          <Link to="/register" href="/register">
            <Button>Move into Town!</Button>
          </Link>
        </div>
      </div>
    </VerticalCenter>
  );

export default Homepage;
