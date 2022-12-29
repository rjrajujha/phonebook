import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from './pages/signInPage/signin';
import SignUp from './pages/signUpPage/signup';
import Contacts from './pages/Contacts/Contacts';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
