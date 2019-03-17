import React from 'react';
import PropTypes from 'prop-types';
// import images from '../img/*.png';

// const Image = ({ src, alt: '' }) =>
// (<img className="animal-crossing-img" src={images[src]} alt={alt}/>);

// parcel is not letting me import / bundle images :(
// use hacky css workaround :(
const Image = ({ src }) => (<div className={`animal-crossing-img ${src}`} />);

Image.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Image;
