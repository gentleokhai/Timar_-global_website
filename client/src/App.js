import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Mynavbar from './Navbar';

const App = () => {
    return (
        <BrowserRouter>
        <Mynavbar />
            <Routes>
            <Route exact path="/" Component={Home} />
            <Route path="/register" Component={Register} />
            <Route path='/login' Component={Login} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;