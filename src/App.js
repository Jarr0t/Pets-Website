import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import MissingAnimal from "./pages/MissingAnimal.js";
import VeterinaryClinics from "./pages/VeterinaryClinics.js";
import Navbar from './components/Navbar/Navbar.js';

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/veterinaryclinics' element={<VeterinaryClinics />} />
        <Route path='/missinganimals' element={<MissingAnimal />} />
        <Route path='/*' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App;