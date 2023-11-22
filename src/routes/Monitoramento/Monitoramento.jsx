import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header.jsx";
import Monitoramento from "../../components/Monitoramento/Monitoramento.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import "./monitoramento.scss";

export default function Loginn() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!sessionStorage.getItem("token-user")) {
      navigate("/login");
    }
  }, [navigate]);

  if (sessionStorage.getItem("token-user")) {
    return (
      <>
        <Header />
        <Monitoramento />
        <Footer />
      </>
    );
  } else {
    return null;
  }
}
