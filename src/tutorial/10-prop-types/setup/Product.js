import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';

const Product = ({ image, name, price }) => {
  
  
  return <article className='product'>

    <img src={image.url} alt="" />
    <h4>{name}</h4>
    <p>$ {price || 3.99}</p>


  </article>;
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

//setting default props
// Product.defaultProps = {
//   name: 'default name',
//   price: 3.99,
//   image: defaultImage,

// };

export default Product;
