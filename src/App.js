import logo from './logo.svg';
import './App.css';
import Navbar from './components/partials/Navbar';
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import CreateBook from './components/CreateBook';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}  >
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />        
        <Route path="create" element={<CreateBook />} />  
      </Route>
    </Routes>
  );
}

export default App;
