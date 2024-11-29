import './App.css'

import { Routes , Route } from 'react-router-dom';

import { useState , useEffect } from 'react';
import axios from 'axios';


import UserHome from './pages/User/Home';
import UserAbout from './pages/User/About';

import AdminDashboard from './pages/Admin/Dashboard';
import AdminCategories from './pages/Admin/Categories';
import AdminAddCategory from './pages/Admin/AddCategory';

function App() {

  return (
    <>
      <Routes>
      <Route path='/' element={<UserHome/>} />
        <Route path='/user/home' element={<UserHome/>} />
        <Route path='/user/about' element={<UserAbout/>} />

        <Route path='/admin/dashboard' element={<AdminDashboard/>} />
        <Route path='/admin/categories' element={<AdminCategories/>} />
        <Route path='/admin/add-category' element={<AdminAddCategory/>} />
      </Routes>
    </>
  )
}

export default App
