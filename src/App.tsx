import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Auth from './pages/auth/Auth'
import LocationDetail from './pages/locationDetail/LocationDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path='/location-detail' element={<LocationDetail />} />
    </Routes>
  )
}

export default App
