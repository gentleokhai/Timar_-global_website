import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Admin from './Admin';
import User from './User';
import Cart from './Cart';
import Orders from './Orders';
// import Mynavbar from './navigate/Navbar';
// import Usernav from './navigate/Usernav';
// import Adminnav from './navigate/Adminnav';
// import { UserContext } from './UserContext';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route exact path="/" Component={Home} />
            <Route path="/register" Component={Register} />
            <Route path="/login" Component={Login} />
            <Route path="/admin" Component={Admin} />
            <Route path="/user/:username" Component={User} />
            <Route path="/cart" Component={Cart} />
            <Route path="admin//orders" Component={Orders} />
            </Routes>
            
        </BrowserRouter>
    );
}

export default App;