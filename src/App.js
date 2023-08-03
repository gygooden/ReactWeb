import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Mission from './components/pages/Mission';
import Publications from './components/pages/Publications';
import Team from './components/pages/Team';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={ <Home />}></Route>
          <Route path='/mission' element={ <Mission />}></Route>
          <Route path='/publications' element={ <Publications />}></Route>
          <Route path='/team' element={ <Team />}></Route> 
          <Route path='/sign-up' element={ <SignUp />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
