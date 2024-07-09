import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:5000/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status === 201) {
        setName('');
        setDescription('');
        setPrice('');
        setImage(null);
        setError(null);
      }
    } catch (error) {
      console.error('Error:', error);
      setError(error.response ? error.response.data.message : error.message);
    }
  };

  return (
    <section id="AddProduct" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Add Product</h2>
        <Row className="justify-content-center">
          <Col md={6}>
            <Form onSubmit={handleSubmit}>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter product name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formDescription">
                <Form.Label>Product Description</Form.Label>
                <Form.Control
                  as ="textarea"
                  rows = {3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter product description"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formNumber">
                <Form.Label>Price per unit</Form.Label>
                <Form.Control
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Price"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formFile">
                <Form.Label>Product Image</Form.Label>
                <Form.Control type="file" onChange={handleImageChange} required/>
              </Form.Group>
              <Button variant="primary" type="submit">Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AddProduct;
