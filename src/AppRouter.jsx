import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Welcome } from './pages/Welcome';
import { Visitas } from "./pages/Visitas";
import { Registro } from './pages/Registro';
import { Accesos } from './pages/Accesos';
import { Layout } from "./pages/layouts/Layout";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout children={<Visitas />} />} />
        <Route path="/dashboard" element={<Layout children={<Welcome />} />} />
        <Route path="/registro" element={<Layout children={<Registro />} />} />
        <Route path="/accesos" element={<Layout children={<Accesos />} />} />
      </Routes>
    </BrowserRouter>
  )
}