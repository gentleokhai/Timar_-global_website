import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from './UserContext';

const Orders = () => {
  const { user } = useContext(UserContext);
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:5000/orders');
        setOrders(response.data);
      } catch (error) {
        console.error('Error:', error);
        setError(error.response ? error.response.data.message : error.message);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div>
      <h2>All Orders</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            <strong>User ID:</strong> {order.user_id} - <strong>Total Price:</strong> ${order.total_price}
            <ul>
              {JSON.parse(order.products).map((product, index) => (
                <li key={index}>
                  {product.name} - ${product.price} x {product.quantity}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
