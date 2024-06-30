// import App from './App';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css'

// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// );


// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UserProvider } from './UserContext';
// import { BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <UserProvider>
    <React.StrictMode>
         <App />
     </React.StrictMode>,
  </UserProvider>,
  document.getElementById('root')
);
