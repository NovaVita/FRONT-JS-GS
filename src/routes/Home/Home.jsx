import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import MainHome from "../../components/MainHome/MainHome.jsx"
import "../../components/Header/header.scss";

export default function Home() {
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
        <MainHome/>
        <Footer />
      </>
    );
  } else {
    return null;
  }
}
