import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Login } from "./pages/Login";
import { Layout } from "./pages/layouts/Layout";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout children={<Login />} />} />
      </Routes>
    </BrowserRouter>
  )
}