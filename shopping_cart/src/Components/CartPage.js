import React from 'react';
import { connect } from 'react-redux';

const CartPage = ({ cartItems }) => {
  return (
    <div>
      <h1>Cart Page</h1>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <img src={item.image} alt={item.title} /> {/* Assuming item.image is the image URL */}
            {item.title} - ${item.price * item.quantity} ({item.quantity} items)
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: state.cartItems.map(item => ({
    ...item,
    quantity: state.cartItems.filter(cartItem => cartItem.id === item.id).length // Calculate quantity for each item
  }))
});

export default connect(mapStateToProps)(CartPage);
