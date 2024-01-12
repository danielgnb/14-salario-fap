import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./Home";
import Dashboard from "./Dashboard";
import Cadastro from "./Cadastro";
import Lista from "./Lista";

const AppRoutes = () => {
   return(
    <Router>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Dashboard/>} />
        <Route path="/cadastro" element={<Cadastro/>} />
        <Route path="/lista" element={<Lista/>} />
        </Routes>
    </Router>
       
   )
}

export default AppRoutes;