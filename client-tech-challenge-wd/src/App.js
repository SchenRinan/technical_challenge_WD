import './App.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Phone from './pages/Phone';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/:id' element={<Phone/>} />
      </Routes>
    </div>
  );
}

export default App;
