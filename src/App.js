import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import Services from './components/Services';
import Contact from './components/Contact';
import Cta from './components/Cta';
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login';


function App() {
  return (
    <>
      <BrowserRouter>

        {/* Navbar Component */}
        <Navbar />
        <br />
        <br />
        <br />
        <Routes>
          <Route>

            <Route exact path="/" index element={<Home />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/cta" element={<Cta />} />
            <Route exact path="/login" element={<Login />} />

          </Route>
        </Routes>

        <Footer/>

      </BrowserRouter>
    </>
  );
}

export default App;
