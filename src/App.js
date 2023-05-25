import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import Services from './components/Services';
import Contact from './components/Contact';
import Cta from './components/Cta';
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login';
import SavingAccount from './components/SavingAccount';
import Profile from './components/Profile';
import AccountOverview from './components/AccountOverview';
import NoteState from './context/NoteState';



function App() {
  return (
    <>
      <NoteState>
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
              <Route exact path="/opensavingsaccount" element={<SavingAccount />} />
              <Route exact path="/myaccount" element={<Profile />} />
              <Route exact path="/accountoverview" element={<AccountOverview />} />

            </Route>
          </Routes>

          <Footer />

        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
