// import React from 'react';

import './App.css';
// import Footer from './Footer';
// import title from './title.png'
// import image from './image1.jpg'
//  import Navbar from './Navbar';
// import pappama from './pappama.jpg';
// import group from './group.jpg';
import {Route,Routes} from "react-router-dom";
import Home from "./routes/Home";
import Service from './routes/Service';
import Contacts from './routes/Contacts';
import About from './routes/About';
import Navbar from './Navbar';
import Donate from './routes/Donate'; 





function App() {

  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/contact" element={<Contacts/>}/>
      <Route path='/donate' element={<Donate/>}/>
     </Routes>

        <Navbar/>
     

    </div>
    
  )
}

export default App;
