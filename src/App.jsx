import { Route, Routes } from 'react-router-dom'; // Ensure you import from 'react-router-dom'
import './App.css';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import Report from './Report';

function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path='/report' element ={<Report/>}/>
      </Routes>
    </div>
  );
}

export default App;
