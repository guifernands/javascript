import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

export function AppRoutes() {
    return(
        <Routes>
          <Route path="/login" element={ <Login /> } />
          <Route path="/" element={ <Home /> } />
        </Routes>
    )
}