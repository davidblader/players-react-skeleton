import React from 'react';
import PropTypes from 'prop-types';

const Button = props => (<button {...props} className="animal-crossing-btn">{props.children}</button>);

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
