import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Import Link from React Router

const CartIcon = ({ cartCounter }) => {
  return (
    <Link to="/cart" className="cart-icon"> {/* Add Link component with to="/cart" */}
      <FontAwesomeIcon icon={faShoppingCart} />
      {cartCounter > 0 && <span className="cart-counter">{cartCounter}</span>}
    </Link>
  );
};

const mapStateToProps = state => ({
  cartCounter: state.cartCounter
});

export default connect(mapStateToProps)(CartIcon);
