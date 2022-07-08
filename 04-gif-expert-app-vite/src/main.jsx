import React from 'react'
import ReactDOM from 'react-dom/client'
import { GifExpertApp } from './GifExpertApp'

import './styles.css'; //estilos globales

/**
 * StricMode ayuda a identificar problemas o advertencias con nuestro codigo y se aplica solo en desarrollo
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
);
