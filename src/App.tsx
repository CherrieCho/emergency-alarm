import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Auth from './pages/auth/Auth'
import LocationDetail from './pages/locationDetail/LocationDetail'
import MainPage from './pages/mainPage/MainPage'
import Signup from './pages/auth/Signup'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<Auth />} />
      <Route path="/signup" element={<Signup />} />
      <Route path='/location-detail' element={<LocationDetail />} />
    </Routes>
  )
}

export default App
