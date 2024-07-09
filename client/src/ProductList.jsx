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
        console.error('Error fetching products:', error);
        setError(error.response ? error.response.data.message : error.message);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = async (productName) => {
    if (!user || !user.token) {
      alert('You need to log in to add products to the cart');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/cart', 
        { product_name: productName, quantity: 1 },
        { headers: { Authorization: `Bearer ${user.token}` } }
      );
      if (response.status === 201) {
        alert('Product added to cart');
      } else {
        console.error('Failed to add product to cart:', response);
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      setError(error.response ? error.response.data.message : error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/products/${id}`);
      if (response.status === 200) {
        setProducts(products.filter(p => p.id !== id));
      } else {
        console.error('Failed to delete product:', response);
      }
    } catch (error) {
      console.error('Error deleting product:', error);
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
            <Col md={4} className="mb-4" key={product.id}>
              <Card>
                <Card.Img variant="top" src={`http://localhost:5000/images/${product.image}`} alt="Product Image" />
                  <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>
                    <p> Price - ${product.price}</p>
                    {product.description}
                  </Card.Text>
                  {isAdmin && <Button onClick={() => handleDelete(product.id)}>Delete</Button>}
                  {!isAdmin && <Button onClick={() => handleAddToCart(product.name)}>Add to Cart</Button>}
                </Card.Body>
              </Card>
            </Col> 
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductList;


// import React, { useState, useEffect, useContext } from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import axios from 'axios';
// import { UserContext } from './UserContext';

// const ProductList = ({ isAdmin }) => {
//   const [products, setProducts] = useState([]);
//   const { user } = useContext(UserContext);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/products');
//         setProducts(response.data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//         setError(error.response ? error.response.data.message : error.message);
//       }
//     };
//     fetchProducts();
//   }, []);

//   // const handleAddToCart = async (productId) => {
//   //   if (!user || !user.token) {
//   //     alert('You need to log in to add products to the cart');
//   //     return;
//   //   }
    
//   //   try {
//   //     const response = await axios.post('http://localhost:5000/cart', 
//   //       { product_id: productId, quantity: 1 },
//   //       { headers: { Authorization: `Bearer ${user.token}` } }
//   //     );
//   //     if (response.status === 201) {
//   //       alert('Product added to cart');
//   //     } else {
//   //       console.error('Failed to add product to cart:', response);
//   //     }
//   //   } catch (error) {
//   //     console.error('Error adding to cart:', error);
//   //     setError(error.response ? error.response.data.message : error.message);
//   //   }
//   // };
//   const handleAddToCart = async (productId) => {
//     if (!user || !user.token) {
//       alert('You need to log in to add products to the cart');
//       return;
//     }
  
//     try {
//       const response = await axios.post('http://localhost:5000/cart', 
//         { product_id: productId, quantity: 1 },
//         { headers: { Authorization: `Bearer ${user.token}`, 'Content-Type': 'application/json' } }
//       );
//       if (response.status === 201) {
//         alert('Product added to cart');
//       } else {
//         console.error('Failed to add product to cart:', response);
//       }
//     } catch (error) {
//       console.error('Error adding to cart:', error);
//       setError(error.response ? error.response.data.message : error.message);
//     }
//   };
  

//   const handleDelete = async (id) => {
//     try {
//       const response = await axios.delete(`http://localhost:5000/products/${id}`);
//       if (response.status === 200) {
//         setProducts(products.filter(p => p.id !== id));
//       } else {
//         console.error('Failed to delete product:', response);
//       }
//     } catch (error) {
//       console.error('Error deleting product:', error);
//       setError(error.response ? error.response.data.message : error.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Products</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <Container>
//         <Row>
//           {products.map(product => (
//             <Col md={4} className="mb-4" key={product.id}>
//               <Card>
//                 <Card.Img variant="top" src={product.image} alt="Product Image" />
//                 <Card.Body>
//                   <Card.Title>{product.name}</Card.Title>
//                   <Card.Text>
//                     <p>Price - ${product.price}</p>
//                     {product.description}
//                   </Card.Text>
//                   {isAdmin && <Button onClick={() => handleDelete(product.id)}>Delete</Button>}
//                   {!isAdmin && <Button onClick={() => handleAddToCart(product.id)}>Add to Cart</Button>}
//                 </Card.Body>
//               </Card>
//             </Col> 
//           ))}
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default ProductList;


// // import React, { useState, useEffect, useContext } from 'react';
// // import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// // import axios from 'axios';
// // import { UserContext } from './UserContext';

// // const ProductList = ({ isAdmin }) => {
// //   const [products, setProducts] = useState([]);
// //   const { user } = useContext(UserContext);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchProducts = async () => {
// //       try {
// //         const response = await axios.get('http://localhost:5000/products');
// //         setProducts(response.data);
// //       } catch (error) {
// //         console.error('Error fetching products:', error);
// //         setError(error.response ? error.response.data.message : error.message);
// //       }
// //     };
// //     fetchProducts();
// //   }, []);

// //   const handleAddToCart = async (productId) => {
// //     if (!user || !user.token) {
// //       alert('You need to log in to add products to the cart');
// //       return;
// //     }
    
// //     try {
// //       const response = await axios.post('http://localhost:5000/cart', 
// //         { product_id: productId, quantity: 1 },
// //         { headers: { Authorization: `Bearer ${user.token}` } }
// //       );
// //       if (response.status === 201) {
// //         alert('Product added to cart');
// //       } else {
// //         console.error('Failed to add product to cart:', response);
// //       }
// //     } catch (error) {
// //       console.error('Error adding to cart:', error);
// //       setError(error.response ? error.response.data.message : error.message);
// //     }
// //   };

// //   const handleDelete = async (id) => {
// //     try {
// //       const response = await axios.delete(`http://localhost:5000/products/${id}`);
// //       if (response.status === 200) {
// //         setProducts(products.filter(p => p.id !== id));
// //       } else {
// //         console.error('Failed to delete product:', response);
// //       }
// //     } catch (error) {
// //       console.error('Error deleting product:', error);
// //       setError(error.response ? error.response.data.message : error.message);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Products</h2>
// //       {error && <p style={{ color: 'red' }}>{error}</p>}
// //       <Container>
// //         <Row>
// //           {products.map(product => (
// //             <Col md={4} className="mb-4" key={product.id}>
// //               <Card>
// //                 <Card.Img variant="top" alt="Product Image"/>
// //                 <Card.Body>
// //                   <Card.Title>{product.name}</Card.Title>
// //                   <Card.Text>
// //                     <p> Price - ${product.price}</p>
// //                     {product.description}
// //                   </Card.Text>
// //                   {isAdmin && <Button onClick={() => handleDelete(product.id)}>Delete</Button>}
// //                   {!isAdmin && <Button onClick={() => handleAddToCart(product.id)}>Add to Cart</Button>}
// //                 </Card.Body>
// //               </Card>
// //             </Col> 
// //           ))}
// //         </Row>
// //       </Container>
// //     </div>
// //   );
// // };

// // export default ProductList;