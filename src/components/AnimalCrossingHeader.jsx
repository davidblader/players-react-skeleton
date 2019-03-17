import React from 'react';
import PropTypes from 'prop-types';

const AnimalCrossingHeader = props => (<span className="animal-crossing-header">{props.children}</span>);

AnimalCrossingHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AnimalCrossingHeader;
