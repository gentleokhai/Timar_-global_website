import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Main.css';
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      console.log(response.data);
      setUser(response.data);
      if (response.data.role === 'admin') {
        navigate('/admin');
      } else {
        navigate(`/user/${response.data.username}`);
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  
  return (
         <section id="contact" className="py-5">
             <Container>
                 <h2 className="text-center mb-4">Login</h2>
                 <Row className="justify-content-center">
                     <Col md={6}>
                         <Form onSubmit={handleSubmit}>
                             <Form.Group className="mb-3" controlId="formEmail">
                                 <Form.Label>Email</Form.Label>
                                 <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email" required />
                             </Form.Group>
                             <Form.Group className="mb-3" controlId="formPassword">
                                 <Form.Label>Password</Form.Label>
                                 <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your Password" required />
                             </Form.Group>                        
                             <Button variant="primary" type="submit">Submit</Button>
                         </Form>
                     </Col>
                 </Row>
             </Container>
         </section>
  );
  
};

export default Login;