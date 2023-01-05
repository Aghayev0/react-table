import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { Customers } from './Pages/Customers';
import { Home } from './Pages/Home';

function App() {
  return <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/customers" element={<Customers />} />
    </Routes>
  </BrowserRouter>
}

export default App;
