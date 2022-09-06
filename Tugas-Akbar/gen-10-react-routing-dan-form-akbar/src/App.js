import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home';
import Menu from './pages/Menu';
import Login from './pages/Login';
import Navigation from './pages/Navigation';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='menu' element={<Menu/>}/>
      <Route path='*' element={<NotFound/>}/>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
