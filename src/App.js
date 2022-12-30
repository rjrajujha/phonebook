import styled from "styled-components";
import Signin from './pages/signInPage/signin';
import Signup from "./pages/signUpPage/signup";

import TotalContact from "./pages/TotalContacts";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ContactContext from "./context/ContactContext";
import { ContactContextProvider } from "./context/ContactContext";

function App() {
  return (
    // <Container>
      <BrowserRouter>
      <ContactContextProvider>
      <Routes>
        <Route exact path="/" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/TotalContacts" element={<TotalContact/>}/>
      </Routes>
      </ContactContextProvider>
      </BrowserRouter>
     
    // </Container>
  );
}

export default App;