import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Login } from "./pages/Login";
import { OlvidarContraseña } from "./pages/OlvidarContraseña";
import { Welcome } from './pages/Welcome';
import { Visitas } from "./pages/Visitas";
import { Registro } from './pages/Registro';
import { Accesos } from './pages/Accesos';
import { ManualUsuario } from "./pages/ManualUsuario";
import { Mas } from "./pages/Mas";
import { Crud } from "./pages/Crud";
import { Notificaciones } from "./pages/Notificaciones";
import { HistorialRegUsers } from "./pages/HistorialRegUsers";
import { RestaurarContraseña } from "./pages/RestaurarContraseña";
import { ManualUsuarioMiembros } from './pages/ManualUsuarioMiembros';
import { Perfil } from './pages/Perfil';
import { VisualizacionGeneral } from './pages/VisualizacionGeneral';
import { Layout } from "./pages/layouts/Layout";
import { LayoutAdmin } from "./pages/layouts/LayoutAdmin";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout children={<Login />} />} />
        <Route path="/olvidar-contraseña" element={<Layout children={<OlvidarContraseña />} />} />
        <Route path="/visitas" element={<Layout children={<Visitas />} />} />
        <Route path="/dashboard" element={<LayoutAdmin children={<Welcome />} />} />
        <Route path="/registro" element={<Layout children={<Registro />} />} />
        <Route path="/accesos" element={<LayoutAdmin children={<Accesos />} />} />
        <Route path="/manual-de-usuario" element={<Layout children={<ManualUsuario />} />} />
        <Route path="/mas" element={<Layout children={<Mas />} />} />
        <Route path="/crud" element={<LayoutAdmin children={<Crud />} />} />
        <Route path="/notificaciones" element={<LayoutAdmin children={<Notificaciones />} />} />
        <Route path="/historial-registros-usuarios" element={<LayoutAdmin children={<HistorialRegUsers />} />} />
        <Route path="/ManualMiembros" element={<LayoutAdmin children={<ManualUsuarioMiembros />} />} />
        <Route path="/Perfil" element={<LayoutAdmin children={<Perfil />} />} />
        <Route path="/VisualizacionGeneral" element={<LayoutAdmin children={<VisualizacionGeneral />} />} />
        <Route path="/restaurar-contraseña" element={<LayoutAdmin children={<RestaurarContraseña />} />} />
      </Routes>
    </BrowserRouter>
  )
}