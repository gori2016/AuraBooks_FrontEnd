import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './rotas/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './componentes/Header'
import Favoritos from './rotas/Favoritos'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categorias" element={<h1>Categorias</h1>} />
      <Route path="/sobre-nos" element={<h1>Sobre Nós</h1>} />
      <Route path="/favoritos" element={<Favoritos />} />
    </Routes>
  </BrowserRouter>
);
