import './App.css'

import { Routes , Route } from 'react-router-dom';

import { useState , useEffect } from 'react';
import axios from 'axios';


import UserHome from './pages/User/Home';
import UserAbout from './pages/User/About';

function App() {

  return (
    <>
      <Routes>
        <Route path='/user/home' element={<UserHome/>} />
        <Route path='/user/about' element={<UserAbout/>} />
      </Routes>
    </>
  )
}

export default App
