import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Pokemon } from './pokemon';
import { Pokemons } from './pokemons';

const AppRoutes  = () => (
    <BrowserRouter> 
      <Routes>
        <Route exact path="/" element={<Pokemons />} />
        <Route exact path="/pokemon/:id" element={<Pokemon />} />
      </Routes>
    </BrowserRouter>
);
  
export default AppRoutes;