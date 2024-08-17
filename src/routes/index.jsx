import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Pokemon } from '../pages/Pokemon/index';
import { Home } from '../pages/Home/index';

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/pokemon/:id" element={<Pokemon />} />
        </Routes>
    </BrowserRouter>
);

export { AppRoutes };
