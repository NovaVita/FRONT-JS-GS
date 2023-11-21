import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from "./routes/Home/Home.jsx";
import Login from "./routes/Login/Login.jsx";
import Aboutus from "./routes/AboutUs/Aboutus.jsx";
import Erro404 from "./routes/Erro404/Erro404.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Erro404 />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/aboutus", element: <Aboutus /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)