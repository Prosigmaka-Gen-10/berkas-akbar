import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home';
import Detail from './pages/Detail';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
    <nav>
      <Link to={"/"}>Home</Link> | <Link to={"/login"}>Login</Link>
    </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
