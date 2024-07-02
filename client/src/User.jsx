import React, { useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './styles/Navbar.css';
import { UserContext } from './UserContext';
import { useNavigate } from 'react-router-dom';
import ProductList from './ProductList';

const User = () => {
  const { logout } = useContext(UserContext)
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
      <Navbar.Brand href="/">Timar World</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ms-auto">
        <Nav.Link href="/user/:username">Home</Nav.Link>
          <Nav.Link href="/cart">Cart</Nav.Link>
          <Nav.Link href="/order">Orders</Nav.Link>
          <Nav.Link href='#' onClick={handleLogout}>logout</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      <ProductList isAdmin={false} />
    </div>
  );
}

export default User;
