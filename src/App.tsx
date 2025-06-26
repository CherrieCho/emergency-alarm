import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Auth from './pages/auth/Auth';
import LocationDetail from './pages/locationDetail/LocationDetail';
import Signup from './pages/auth/Signup';
import { MainPage } from './pages/mainPage/MainPage';
import AppLayout from './layout/AppLayout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<MainPage />} />

        <Route path='/login' element={<Auth />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/location-detail' element={<LocationDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
