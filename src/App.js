import logo from './logo.svg';
import { useState } from 'react';
import { TextField, Button } from '@mui/material';

import './App.css';
import RegistrationForm from './Registration';
import DialogPopOver from './DialogPopOver';
import { Route, Routes } from 'react-router-dom';
import ProfilePage from './ProfilePage';
import Users from './Users';
function App() {



  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Users/>} />
        <Route path="/profilePage/:firstName/:lastName/:email" element={<ProfilePage/>} />


       </Routes>
     </div>
  );
}

export default App;
