import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Login } from "./pages/Login";
import { OlvidarContraseña } from "./pages/OlvidarContraseña";
import { RestaurarContraseña } from "./pages/RestaurarContraseña";
import { Layout } from "./pages/layouts/Layout";
import { ManualUsuarioMiembros } from './pages/ManualUsuarioMiembros';
import { Perfil } from './pages/Perfil';
import { VisualizacionGeneral } from './pages/VisualizacionGeneral';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout children={<Login />} />} />
        <Route path="/olvidar-contraseña" element={<Layout children={<OlvidarContraseña />} />} />
        <Route path="/ManualMiembros" element={<Layout children={<ManualUsuarioMiembros />} />} />
        <Route path="/Perfil" element={<Layout children={<Perfil />} />} />
        <Route path="/VisualizacionGeneral" element={<Layout children={<VisualizacionGeneral />} />} />
        <Route path="/restaurar-contraseña" element={<Layout children={<RestaurarContraseña />} />} />        
      </Routes>
    </BrowserRouter>
  )
}