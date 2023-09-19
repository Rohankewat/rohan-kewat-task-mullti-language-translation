import { Link, Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Detail from './Components/Detail';
import Home from './Components/Home';
import "./App.css";

function App() {
  // Rohan Kewat task
  return (
    <div className="main-container">
      <center>
        <span> <Link to='/home' style={{ textDecoration: "none",color:"skyblue" }}>Home</Link></span>
        <span> <Link to='/about' style={{ textDecoration: "none",color:"skyblue" }}>About</Link></span>
        <span>    <Link to='/contact' style={{ textDecoration: "none",color:"skyblue" }}>Contact</Link></span>
        <span> <Link to='/detail' style={{ textDecoration: "none",color:"skyblue" }}>Detail</Link></span>

        <div>
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/detail" element={<Detail />}></Route>
          </Routes>
        </div>

      </center>
    </div>
  )
}

export default App;