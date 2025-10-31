import './App.css';
import { Route, Routes } from 'react-router-dom';
import Auth from './pages/auth/Auth';
import LocationDetail from './pages/locationDetail/LocationDetail';
import Signup from './pages/auth/Signup';
import AppLayout from './layout/AppLayout';
import Guidelines from './pages/guidelines/Guidelines';
import MainPage from './pages/mainPage/MainPage';
import GuidelineDetail from './pages/guidelines/components/GuidelineDetail';
import RequireAuth from './components/RequireAuth';
import MyPage from './pages/myPage/MyPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<MainPage />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/location-detail' element={<LocationDetail />} />
        <Route path='/guideline' element={<Guidelines />}>
          <Route path=':id' element={<GuidelineDetail />} />
        </Route>

        <Route
          path='/mypage'
          element={
            <RequireAuth>
              <MyPage />
            </RequireAuth>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
