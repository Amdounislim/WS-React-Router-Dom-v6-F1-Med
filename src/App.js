import React, { useState } from "react"
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Admin from "./components/Admin";
import Connection from './components/Connection';
import Home from './components/Home';
import NavBar from './components/NavBar/NavBar';
import PrivateRoute from "./components/PrivateRoute";
import UserProfile from "./components/UserProfile/UserProfile";
import Users from './components/Users/Users';
import { Persons } from "./components/UsersData"

function App() {

  const [persons, setPersons] = useState(Persons)
  const [isAuth, setIsAuth] = useState(false)

  const login = () => setIsAuth(true)
  const logout = () => setIsAuth(false)


  return (
    <div className="App">
      <NavBar login={login} logout={logout} isAuth={isAuth} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users persons={persons} />} />
        {/* <Route path="/connection" element={<Connection />} /> */}
        <Route path="/users/:id" element={<UserProfile persons={persons} />} />
        <Route path='/admin' element={
          <PrivateRoute component={Admin} isAuth={isAuth} />
        } />

      </Routes>

    </div>
  );
}

export default App;
