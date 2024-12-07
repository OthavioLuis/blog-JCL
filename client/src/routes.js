
import React from "react";
import { Routes, Route } from "react-router-dom";

import Inicio from "./Rotas/Inicio";
import Temas from "./Rotas/Temas";
import Usuario from "./Rotas/Usuario";
import Login from "./Rotas/Login";
import CriarTema from "./Rotas/CriarTema";

const Rotas = () => {
    return (
        <Routes>
            <Route element={<Inicio />} path="/" />
            <Route element={<Temas />} path="/Temas" />
            <Route element={<Usuario />} path="/Usuario" />
            <Route element={<Login />} path="/Login" />
            <Route element={<CriarTema />} path="/criar-tema" />
        </Routes>
    )
}

export default Rotas;