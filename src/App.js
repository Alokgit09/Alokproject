import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import Contact from './components/Contact';
import SingUp from './components/Singup';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
   
    <Header />
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/singup' element={<SingUp />} />
      </Routes>
 
   </>
  );
}

export default App;
