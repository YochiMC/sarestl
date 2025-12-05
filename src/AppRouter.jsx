import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Login } from "./pages/Login";
import { OlvidarContraseña } from "./pages/OlvidarContraseña";
import { ManualUsuario } from "./pages/ManualUsuario";
import { Mas } from "./pages/Mas";
import { Crud } from "./pages/Crud";
import { Notificaciones } from "./pages/Notificaciones";
import { HistorialRegUsers } from "./pages/HistorialRegUsers";
import { Layout } from "./pages/layouts/Layout";
import { LayoutAdmin } from "./pages/layouts/LayoutAdmin";


export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout children={<Login />} />} />
        <Route path="/olvidar-contraseña" element={<Layout children={<OlvidarContraseña />} />} />
        <Route path="/manual-de-usuario" element={<Layout children={<ManualUsuario />} />} />
        <Route path="/mas" element={<Layout children={<Mas />} />} />
        <Route path="/crud" element={<LayoutAdmin children={<Crud />} />} />
        <Route path="/notificaciones" element={<LayoutAdmin children={<Notificaciones />} />} />
        <Route path="/historial-registros-usuarios" element={<LayoutAdmin children={<HistorialRegUsers />} />} />
      </Routes>
    </BrowserRouter>
  )
}