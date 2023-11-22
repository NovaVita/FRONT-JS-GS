import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ConteudoNovaVita from "../../components/ConteudoNovaVitaAPP/ConteudoNovaVitaAPP.jsx";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";

export default function NovaVitaAPP() {
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
        <ConteudoNovaVita/>
        <Footer />
      </>
    );
  } else {
    return null;
  }
}
