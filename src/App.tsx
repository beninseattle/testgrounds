
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from './loginPage.tsx';
import HomePage from './homePage.tsx';
import ConfirmUserPage from './confirmUserPage.tsx';
import './App.css'

function App() {
  const isAuthenticated = () => {
    const accessToken = sessionStorage.getItem('accessToken');
    return !!accessToken;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isAuthenticated() ? <Navigate replace to="/home" /> : <Navigate replace to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/confirm" element={<ConfirmUserPage />} />
        <Route path="/home" element={isAuthenticated() ? <HomePage /> : <Navigate replace to="/login" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
