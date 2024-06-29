import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Main.css';

const Home = () => {
    return (
        <div>
            <header className="bg-primary text-white text-center py-5">
                <Container>
                    <h1 className="display-4">Hello <div className="wave">&#x270B;</div> and Welcome to My TImar_Gloable</h1>
                    <p className="lead">A pleasure</p>
                </Container>
            </header>
        </div>
    );
}

export default Home;