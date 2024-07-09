import React, { createContext, useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

    export const UserContext = createContext();

    export const UserProvider = ({ children }) => {
      const [user, setUser] = useState(null);

      useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
          setUser({ token });
        }
      }, []);

      const logout = () => {
        setUser(null);
        localStorage.removeItem('authToken');
      };

      return (
        <UserContext.Provider value={{ user, setUser, logout }}>
          {children}
        </UserContext.Provider>
      );
    };

// import React, { createContext, useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// export const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('authToken');
//     if (token) {
//       setUser({ token });
//     }
//   }, []);

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem('authToken');
//     navigate('/login');
//   };

//   return (
//     <UserContext.Provider value={{ user, setUser, logout }}>
//       {children}
//     </UserContext.Provider>
//   );
// };



// //  import React, { createContext, useState, useEffect } from 'react';
// //  import { useNavigate } from 'react-router-dom';

// //  export const UserContext = createContext();

// //  export const UserProvider = ({ children }) => {
//  const [user, setUser] = useState(null);
//  const navigate = useNavigate();

//  useEffect(() => {
//    const storedUser = localStorage.getItem('authToken');
//    if (storedUser) {
//      setUser(JSON.parse(storedUser));
//    }
//  }, []);

//  const logout = () => {
//    setUser(null);
//    localStorage.removeItem('authToken');
//    navigate('/login');
//  };

//  return (
//    <UserContext.Provider value={{ user, setUser, logout }}>
//      {children}
//    </UserContext.Provider>
//  );
// //  };


// // import React, { createContext, useState, useEffect } from 'react';

// // export const UserContext = createContext();

// // export const UserProvider = ({ children }) => {
// const [user, setUser] = useState(null);

// useEffect(() => {
//   const storedUser = localStorage.getItem('authToken');
//   if (storedUser) {
//     setUser(JSON.parse(storedUser));
//   }
// }, []);

// const logout = () => {
//   setUser(null);
//   localStorage.removeItem('authToken');
// };

// return (
//   <UserContext.Provider value={{ user, setUser, logout }}>
//     {children}
//   </UserContext.Provider>
// );
// // };
