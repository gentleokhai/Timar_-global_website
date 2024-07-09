import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Admin from './Admin';
import User from './User';
import { UserProvider } from './UserContext';

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/register" Component={Register} />
          <Route path="/login" Component={Login} />
          <Route path="/admin" Component={Admin} />
          <Route path="/user/:username" Component={User} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
