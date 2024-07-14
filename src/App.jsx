import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import OrderDetails from './pages/OrderDetails';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home" element={<ProtectedRoute component={Home} />} />
          <Route path="/order/:id" element={<ProtectedRoute component={OrderDetails} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

