import React from 'react';
import PropTypes from 'prop-types';

const Button = props => (<button className="animal-crossing-btn">{props.children}</button>);

Button.propTypes = {
  children: [PropTypes.array, PropTypes.object],
};

Button.defaultProps = {
  children: [],
};


export default Button;
