import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import Services from './components/Services';
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login';
import SavingAccount from './components/SavingAccount';
import Profile from './components/Profile';
import AccountOverview from './components/AccountOverview';
import NoteState from './context/NoteState';
import Alert from './components/Alert';
import TransferAmount from './components/TransferAmount';




function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout((showAlert) => {
      setAlert(null);
    }, 55000);
  };


  return (
    <>
      <NoteState>
        <BrowserRouter>

          {/* Navbar Component */}
          <Navbar />
          <br />
          <br />
          <br />
          <br />
          <Alert alert={alert} />


          <Routes>

            <Route>
              <Route exact path="/" index element={<Home />} />
              <Route exact path="/services" element={<Services />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/login" element={<Login showAlert={showAlert} />} />
              <Route exact path="/opensavingsaccount" element={<SavingAccount showAlert={showAlert} />} />
              <Route exact path="/accountoverview" element={<AccountOverview />} />
              <Route exact path="/profile" element={<Profile />} />
              <Route exact path="/transfer" element={<TransferAmount showAlert={showAlert}/>} />
            </Route>
          </Routes>

          <Footer />

        </BrowserRouter>
      </NoteState >
    </>
  );
}

export default App;
