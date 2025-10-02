import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Faculties from './pages/Faculties/Faculties';
import Equipement from './pages/Equipement/Equipement';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import About from './pages/About/About';



function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About/>} />
        <Route path="/Faculties" element={<Faculties />} />
        <Route path="/Equipement" element={<Equipement />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
