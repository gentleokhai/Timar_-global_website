import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import { UserContext } from './UserContext';

const ProductList = ({ isAdmin }) => {
  const [products, setProducts] = useState([]);
  const { user } = useContext(UserContext);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error:', error);
        setError(error.response ? error.response.data.message : error.message);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = async (productId) => {
    try {
      const response = await axios.post('http://localhost:5000/cart', { user_id: user.id, product_id: productId, quantity: 1 });
      if (response.status === 201) {
        alert('Product added to cart');
      }
    } catch (error) {
      console.error('Error:', error);
      setError(error.response ? error.response.data.message : error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/products/${id}`);
      if (response.status === 200) {
        setProducts(products.filter(p => p.id !== id));
      }
    } catch (error) {
      console.error('Error:', error);
      setError(error.response ? error.response.data.message : error.message);
    }
  };

  return (
    <div>
      <h2>Products</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Container>
        <Row>
        {products.map(product => (
            <Col md={4} className="mb-4">
            <Card>
            <Card.Img variant="top" alt="Product Image"/>
            <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
               <p> Price - ${product.price}</p>
            {product.description}
            </Card.Text>
            {isAdmin && <Button onClick={() => handleDelete(product.id)}>Delete</Button>}
            {!isAdmin && <Button onClick={() => handleAddToCart(product.id)}>Add to Cart</Button>}
            </Card.Body>
            </Card>
            </Col> 
        ))}
        </Row>
        </Container>
      {/* <ul>
        {products.map(product => (
          <li key={product.id}>
            <strong>{product.name}</strong> - ${product.price}
            {isAdmin && <button onClick={() => handleDelete(product.id)}>Delete</button>}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default ProductList;


// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import { UserContext } from './UserContext';

// const ProductList = () => {
//   const { user } = useContext(UserContext);
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/products');
//         setProducts(response.data);
//       } catch (error) {
//         console.error('Error:', error);
//         setError(error.response ? error.response.data.message : error.message);
//       }
//     };
//     fetchProducts();
//   }, []);

//   const handleAddToCart = async (productId) => {
//     try {
//       const response = await axios.post('http://localhost:5000/cart', { user_id: user.id, product_id: productId, quantity: 1 });
//       if (response.status === 201) {
//         alert('Product added to cart');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setError(error.response ? error.response.data.message : error.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Products</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <ul>
//         {products.map(product => (
//           <li key={product.id}>
//             <strong>{product.name}</strong> - ${product.price}
//             <button onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProductList;
