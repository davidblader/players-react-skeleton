import React from 'react';
import PropTypes from 'prop-types';

const AnimalCrossingContainer = ({ children, ...rest }) => (<div {...rest} className="animal-crossing-container">{children}</div>);

AnimalCrossingContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AnimalCrossingContainer;
