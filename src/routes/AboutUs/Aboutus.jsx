import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Aboutus from "../../components/AboutUs/Aboutus.jsx";
import Teste from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";

export default function Aboutuss() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!sessionStorage.getItem("token-user")) {
      navigate("/login");
    }
  }, [navigate]);
  if (sessionStorage.getItem("token-user")) {
    return (
      <>
        <Teste />
        <Aboutus />
        <Footer />
      </>
    );
  } else {
    return null;
  }
}
