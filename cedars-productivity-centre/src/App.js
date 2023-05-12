import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar';
import Home from './layout/Home/Home';
import About from './layout/About/About';
import Programs from './layout/Programs/Programs';
import Activities from './layout/Activities/Activities';
import Contact from './layout/Contact/Contact';
import GetInvolved from './layout/GetInvolved/GetInvolved';
import SubBlog from './components/BlogContent/SubBlog/index'

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/programs' element={<Programs />} />
        <Route path='/activities' element={<Activities />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/get-involved' element={<GetInvolved />} />
        <Route path='/blog' element={<SubBlog />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;