import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Auth from './pages/auth/Auth';
import { MainPage } from './pages/mainPage/MainPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
    </Routes>
  );
}

export default App;
