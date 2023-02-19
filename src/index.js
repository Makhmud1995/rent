import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './components/root';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Motor from './components/menu-page/Motor';
import Caravan from './components/menu-page/Caravan';
import Tuning from './components/menu-page/Tuning';
import UsedCar from './components/menu-page/UsedCar';
import CampingPlace from './components/menu-page/CampingPlace';
import Navbar from './components/navbar/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
  <Navbar/>
 <Routes>
<Route path='/' element={<Root />} />
<Route path='/Motor' element={<Motor/>} />
<Route path='/Caravan' element={<Caravan />} />
<Route path='/Tuning' element={<Tuning />} />
<Route path='/UsedCar' element={<UsedCar />} />
<Route path='/CampingPlace' element={<CampingPlace />} />

 </Routes>
 </BrowserRouter>
);

