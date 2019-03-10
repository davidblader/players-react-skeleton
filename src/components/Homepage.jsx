import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import VerticalCenter from './VerticalCenter';
import AnimalCrossingHeader from './AnimalCrossingHeader';
import Button from './Button';

const Homepage = () =>
  (
    <VerticalCenter>
      <div id="homepage">
        <AnimalCrossingHeader>Animal Crossing Fantasy Village</AnimalCrossingHeader>
          <div>
            <Link to="/login">
              <Button>Login</Button>
            </Link>
            <Link to="/register">
              <Button>Move into Town!</Button>
            </Link>
          </div>
      </div>
    </VerticalCenter>
  );

export default Homepage;
