// import React, { useContext } from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import './styles/Navbar.css';
// import { UserContext } from './UserContext';
// import { useNavigate } from 'react-router-dom';

// const Admin = () => {
//     const { logout } = useContext(UserContext)
//     const navigate = useNavigate();
  
//     const handleLogout = () => {
//       logout();
//       navigate('/');
//     }
//   return (
//     <div>
//       <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
//     <Container>
//       <Navbar.Brand href="/">Timar World</Navbar.Brand>
//       <Navbar.Toggle aria-controls="navbar-nav" />
//       <Navbar.Collapse id="navbar-nav">
//         <Nav className="ms-auto">
//           <Nav.Link href="/admin">Home</Nav.Link>
//           <Nav.Link href="/orders">Orders</Nav.Link>
//           <Nav.Link href='#' onClick={handleLogout}>logout</Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Container>
//   </Navbar>
//       <h1>Admin Page</h1>
//       <p>Welcome, Admin!</p>
//     </div>
//   );
// };

// export default Admin;



import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './styles/Navbar.css';
import AddProduct from './AddProduct';
import ProductList from './ProductList';
import { UserContext } from './UserContext';

const Admin = () => {
  const { logout } = React.useContext(UserContext);

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="/">Timar World</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/admin">Home</Nav.Link>
              <Nav.Link href="/admin/orders">Orders</Nav.Link>
              <Nav.Link href="#" onClick={logout}>Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <p>Welcome, Admin!</p>
      <AddProduct />
      <ProductList isAdmin={true} />
    </div>
  );
}

export default Admin;
