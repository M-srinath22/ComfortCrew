import React from 'react';
import HomePage from './HomePage';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Electrical from './components/Electrical';
import Painting from './components/Painting';
import Bathroom from './components/Bathroom';
import Water from './components/Water';
import Ac from './components/Ac';
import Plumbing from './components/Plumbing';
import Kitchen from './components/Kitchen';
import Gardening from './components/Gardening';
import Carpet from './components/Carpet';
import Carwash from './components/Carwash';
import Tank from './components/Tank';
import Cctv from './components/Cctv';
import Login from './components/Login';
import Signup from './components/SignUp';
import AboutUs from './components/AboutUs';
import Change from './components/Change';
import Services from './components/Services';
import Contact from './components/Contact';
import Blogs from './components/Blogs';
import Cart from './components/Cart';
import ChildCareServices from './components/ChildCareServices';
import DayNursingServices from './components/DayNursingServices';
import ShippingServices from './components/ShippingServices';
import ProceedToCheckout from './components/ProceedToCheckout';
import PaymentPage from './components/PaymentPage';

function App() {
  return (
  
  <Router>
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/elec" element={<Electrical></Electrical>}></Route>
      <Route path="/pain" element={<Painting></Painting>}></Route>
      <Route path="/bathroom" element={<Bathroom></Bathroom>}></Route>
      <Route path="/water" element={<Water></Water>}></Route>
      <Route path="/ac" element={<Ac></Ac>}></Route>
      <Route path="/plumb" element={<Plumbing></Plumbing>}></Route>
      <Route path="/kitchen" element={<Kitchen></Kitchen>}></Route>
      <Route path="/garden" element={<Gardening></Gardening>}></Route>
      <Route path="/carpet" element={<Carpet></Carpet>}></Route>
      <Route path="/carwash" element={<Carwash></Carwash>}></Route>
      <Route path="/tank" element={<Tank></Tank>}></Route>
      <Route path="/cctv" element={<Cctv></Cctv>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>
      <Route path="/about" element={<AboutUs></AboutUs>}></Route>
      <Route path="/change" element={<Change></Change>}></Route>
      <Route path='/service' element={<Services></Services>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path="/blogs" element={<Blogs></Blogs>}></Route>
      <Route path='/cart' element={<Cart></Cart>}></Route>
      <Route path='/child' element={<ChildCareServices></ChildCareServices>}></Route>
      <Route path='/nurse' element={<DayNursingServices></DayNursingServices>}></Route>
      <Route path='/ship' element={<ShippingServices></ShippingServices>}></Route>
      <Route path='/checkout' element={<ProceedToCheckout></ProceedToCheckout>}></Route>
      <Route path='/payment' element={<PaymentPage></PaymentPage>}></Route>
  </Routes>
  </Router> 
  
  );
}

export default App;