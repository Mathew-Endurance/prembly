import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../reducers/action'; 
import data from '../data'
import CartIcon from './CartIcon';


const ProductPage = ({ products, cartCounter, addToCart }) => {
  return (
    <div>
      <h1>Product Page</h1>
      <div className="product-grid">
        {data.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.img} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <p>{product.description}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div>
        Cart Counter: <CartIcon/>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  products: state.products, // Assuming your Redux store has products
  cartCounter: state.cartCounter // Assuming your Redux store has a cart counter
});

export default connect(mapStateToProps, { addToCart })(ProductPage);
