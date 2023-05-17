import React from 'react';
import Video from './pages/Video';
import Home from './pages/Home';
import Navbar from "./components/Navbar/Navbar"
import Footer from './components/Footer';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Videos/:videoid" element={<Video/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
