import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Main.css';
import './styles/Navbar.css';


const Home = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand href="/">Timar World</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <header className="bg-primary text-white text-center py-5">
                <Container>
                    <h1 className="display-4">Hello <div className="wave">&#x270B;</div> and Welcome to TImar Global Website</h1>
                    <p className="lead">A pleasure</p>
                </Container>
            </header>
        </div>
    );
}

export default Home;