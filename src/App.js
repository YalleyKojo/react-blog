
import Header from './Header'

import Nav from './Nav'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import Newpost from './Newpost'
import Post from './Post'
import Missing from './Missing'
import { Route, Routes, useHistory} from 'react-router-dom'
import {useState ,useEffect} from 'react'
function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/newpost" element={<Newpost />} />
        <Route path="/postdetail/:id" element={<Post />} />
        <Route path="*" element={<Missing/>} />

      </Routes>
      
      
      <Footer />
      
    </div>
  );
}

export default App;
