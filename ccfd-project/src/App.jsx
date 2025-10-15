// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      {/* Simple navigation for testing */}
      <nav className="p-4 bg-gray-800 text-white flex space-x-4">
        <Link to="/signup" className="hover:text-indigo-400">Sign Up</Link>
        <Link to="/dashboard" className="hover:text-indigo-400">Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Setting a default route */}
        <Route path="/" element={<Signup />} /> 
      </Routes>
    </Router>
  );
}

export default App;