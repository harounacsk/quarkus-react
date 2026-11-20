import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import ProtectedRoute from './auth/ProtectedRoute'


function App() {

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/home' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
