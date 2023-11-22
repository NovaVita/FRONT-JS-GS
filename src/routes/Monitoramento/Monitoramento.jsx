import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Monitoramento from "../../components/Monitoramento.jsx";
import Footer from "../../components/Footer.jsx";
import "../../style/monitoramento.scss";

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
        <Monitoramento />
        <Footer />
      </>
    );
  } else {
    return null;
  }
}
