// import React, { useState } from 'react';
// import axios from 'axios';


// const Register = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [phonenumber, setPhonenumber] = useState('')
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/register', { username, email, phonenumber, password });
//       alert(response.data.message);
//     } catch (error) {
//       console.error(error);
//       alert('Registration failed');
//     }
//   };


//   );
// };

// export default Register;




import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Main.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('')
  const [password, setPassword] = useState('');
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/register', { username, email, phonenumber, password});
      setUser(response.data);
      if (response.data.role === 'admin') {
        navigate('/admin');
      } else {
        navigate(`/user/${response.data.username}`);
      }
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
     <section id="contact" className="py-5">
         <Container>
             <h2 className="text-center mb-4">Register</h2>
             <Row className="justify-content-center">
                 <Col md={6}>
                     <Form onSubmit={handleSubmit}>
                         <Form.Group className="mb-3" controlId="formName">
                             <Form.Label>Name</Form.Label>
                             <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your name" required />
                         </Form.Group>
                         <Form.Group className="mb-3" controlId="formEmail">
                             <Form.Label>Email</Form.Label>
                             <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email" required />
                         </Form.Group>
                         <Form.Group className="mb-3" controlId="formNumber">
                             <Form.Label>Phone number</Form.Label>
                             <Form.Control type="number" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} placeholder="Phone Number" required />
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

export default Register;


// <form onSubmit={handleRegister}>
// <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
// <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
// <select value={role} onChange={(e) => setRole(e.target.value)}>
//   <option value="user">User</option>
//   <option value="admin">Admin</option>
// </select>
// <button type="submit">Register</button>
// </form>