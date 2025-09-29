import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Accueil from './pages/Accueil/Accueil';
import Faculte from './pages/Faculte/Faculte';
import Admissions from './pages/Admissions/Admissions';
import Recherche from './pages/Recherche/Recherche';
import Hebergement from './pages/Hebergement/Hebergement';
import Informations from './pages/Informations/Informations';


function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Faculte" element={<Faculte/>} />
        <Route path="/Admissions" element={<Admissions />} />
        <Route path="/Recherche" element={<Recherche />} />
        <Route path="/Hebergement" element={<Hebergement />} />
        <Route path="/Informations" element={<Informations/>} />
      </Routes>
    </div>
  );
}

export default App;
