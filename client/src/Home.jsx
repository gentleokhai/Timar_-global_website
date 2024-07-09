import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Main.css';
import './styles/Navbar.css';
import './styles/Home.css';

const Home = () => {
    return (
        <div className='home'>
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
            <header className="text-center py-5">
                <Container className='header'>
                    <h1 className="display-4">Hello <div className="wave">&#x270B;</div> Welcome to Timar Global Website</h1>
                    <p>
                    Discover a world of unique and high quality products curated just for you.
                    </p>
                    <p>
                        At Timar World, we believe in providing our customers with the best shopping experience.
                    </p>
                    <p>
                         Our mission is to bring you a diverse range of products that cater to all your needs, ensuring quality, affordability, and satisfaction.
                    </p>
                    <p>
                        Click the button below to begin exploring our collections and find something special just for you today.
                    </p>

                    <Button className='Button'><a href='/register'>Shop Now</a></Button>
                    <p>Already part of the community? Click the button below to continue exploring!</p>
                    <Button className='Button'><a href='/login'>Welcome Back</a></Button>
                </Container>
            </header>
        </div>
    );
}

export default Home;