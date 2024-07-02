import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from './UserContext';

const Cart = () => {
  const { user } = useContext(UserContext);
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/cart/${user.id}`);
        setCartItems(response.data);
      } catch (error) {
        console.error('Error:', error);
        setError(error.response ? error.response.data.message : error.message);
      }
    };
    fetchCartItems();
  }, [user.id]);

  const handleCheckout = async () => {
    const productDetails = cartItems.map(item => {
      const product = products.find(p => p.id === item.product_id);
      return { id: product.id, name: product.name, price: product.price, quantity: item.quantity };
    });
    const total_price = productDetails.reduce((total, product) => total + product.price * product.quantity, 0);

    try {
      const response = await axios.post('http://localhost:5000/orders', {
        user_id: user.id,
        products: productDetails,
        total_price
      });
      if (response.status === 201) {
        setCartItems([]);
        alert('Order placed successfully!');
      }
    } catch (error) {
      console.error('Error:', error);
      setError(error.response ? error.response.data.message : error.message);
    }
  };

  return (
    <div>
      <h2>Cart</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {cartItems.map(item => (
          <li key={item.product_id}>
            Product ID: {item.product_id} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default Cart;
