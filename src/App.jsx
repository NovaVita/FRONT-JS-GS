import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/app.scss";

import Teste from "./routes/Teste.jsx";
import Login from "./routes/Login.jsx";
import Aboutus from "./routes/Aboutus.jsx";
import Erro404 from "./routes/Erro404.jsx";

export default function App() {
  return (
    <>
      <div>
      <BrowserRouter>
            <Routes>
                <Route index element={<Teste/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/aboutus" element={<Aboutus/>}/>
                <Route exact path="*" element={<Erro404/>}/>
            </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
