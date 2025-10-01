<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Accueil from './pages/Accueil/Accueil';
import Faculte from './pages/Faculte/Faculte';
import Admissions from './pages/Admissions/Admissions';
import Recherche from './pages/Recherche/Recherche';
import Hebergement from './pages/Hebergement/Hebergement';
import Informations from './pages/Informations/Informations';

=======
import { Routes } from 'react-router-dom';

import './App.css'
import Header from './components/header/Header';
>>>>>>> 5a63da8c71cd879df5a211f68839ce2421e391a1

function App() {
  return (
    <div className='App'>
<<<<<<< HEAD
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
=======
      <Header/>
      <Routes>
        
      </Routes>
    </div>
  )
}

export default App;
>>>>>>> 5a63da8c71cd879df5a211f68839ce2421e391a1
