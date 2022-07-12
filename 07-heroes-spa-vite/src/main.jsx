import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import { HeroesApp } from './HeroesApp';
import './index.css';

/**
 * 1. Crear estructura de carpetas
 * 2. Crear AppRouter.jsx
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeroesApp />
    </BrowserRouter>
  </React.StrictMode>
)
