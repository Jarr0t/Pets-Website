import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import MissingAnimal from "./pages/MissingAnimal.js";
import VeterinaryClinics from "./pages/VeterinaryClinics.js";
import CareDogs from './pages/CareDogs.js';
import CareCats from './pages/CareCats.js';
import Shelters from './pages/Shelters.js';
import FirstHelp from './pages/FirstHelp.js';
import Navbar from './components/Navbar/Navbar.js';
import Footer from "./components/Footer/Footer.js";
import Profile from './pages/Profile.js';

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/veterinaryclinics' element={<VeterinaryClinics />} />
        <Route path='/missingpets' element={<MissingAnimal />} />
        <Route path='/caredogs' element={<CareDogs/>}/>
        <Route path='/carecats' element={<CareCats/>}/>
        <Route path='/shelters' element={<Shelters/>}/>
        <Route path='/firsthelp' element={<FirstHelp/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/*' element={<Home />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;