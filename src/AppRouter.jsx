import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Login } from "./pages/Login";
import { OlvidarContraseña } from "./pages/OlvidarContraseña";
import { Welcome } from './pages/Welcome';
import { Visitas } from "./pages/Visitas";
import { Registro } from './pages/Registro';
import { Accesos } from './pages/Accesos';
import { Layout } from "./pages/layouts/Layout";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout children={<Login />} />} />
        <Route path="/olvidar-contraseña" element={<Layout children={<OlvidarContraseña />} />} />
        <Route path="/visitas" element={<Layout children={<Visitas />} />} />
        <Route path="/dashboard" element={<Layout children={<Welcome />} />} />
        <Route path="/registro" element={<Layout children={<Registro />} />} />
        <Route path="/accesos" element={<Layout children={<Accesos />} />} />
      </Routes>
    </BrowserRouter>
  )
}