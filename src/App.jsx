import AboutUs from './AboutUs';
import './App.css'
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Service from './Service';
import Projects from './Projects';
import GetQuote from './GetQuote';
import Testimonials from './Testimonials';
import ContactUs from './ContactUs';


function App() {
  return (
    <>
    <Router>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/getquote' element={<GetQuote/>}/>
      <Route path='/testimonial' element={<Testimonials/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
    </Routes>
    </Router>
    </>
  )
}

export default App;
