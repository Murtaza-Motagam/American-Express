import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HashLoader from "react-spinners/HashLoader"
import Navbar from './components/Navbar';
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';
import Footer from './components/Footer';
import Login from './components/Login';
import SavingAccount from './pages/SavingAccount';
import Profile from './pages/Profile';
import AccountOverview from './pages/AccountOverview';
import NoteState from './context/NoteState';
import Alert from './components/Alert';
import TransferAmount from './pages/TransferAmount';



function App() {

  const [alert, setAlert] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [])


  // Alert Component starts here 

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

      {/* {
        loading ?

          <div className="App bg-brand-2">
            <h1 className='fs-1 text-white font-fam-poppins mb-3'>American-Express</h1>
            <h4 className='text-white font-fam-poppins fs-2 mb-5'>Loading...</h4>
            <HashLoader
              color="#ffffff"
              size={100}
              loading={loading}
            />
          </div>
          : */}

          <NoteState>
            <BrowserRouter>

              {/* Navbar Component */}
              <Navbar />
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
                  <Route exact path="/transfer" element={<TransferAmount showAlert={showAlert} />} />
                </Route>
              </Routes>

              <Footer />

            </BrowserRouter>
          </NoteState >

      {/* } */}
    </>
  );
}

export default App;
