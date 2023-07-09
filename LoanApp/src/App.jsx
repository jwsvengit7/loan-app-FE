import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './assets/components/Homepage/HomePage';
import Login from './assets/components/Login/Login';
import Register from './assets/components/Register/Register';
import './App.css'
import Dashboard from './assets/components/Dashbaord/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/app/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
