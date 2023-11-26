import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import Detail from './Routes/Detail';
import Contact from './Routes/Contact';
import Fav from './Routes/Fav';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/home' element={<Home />} />
          <Route path="/dentist/:id" element={<Detail />} />
          <Route path='/contacto' element={<Contact />} />
          <Route path='/favs' element={<Fav />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)

