import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Visitas } from "./pages/Visitas";
import { Registro } from './pages/Registro';
import { Layout } from "./pages/layouts/Layout";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout children={<Visitas />} />} />
        <Route path="/registro" element={<Layout children={<Registro />} />} />
      </Routes>
    </BrowserRouter>
  )
}