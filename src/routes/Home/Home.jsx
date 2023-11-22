import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";

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
        <Footer />
      </>
    );
  } else {
    return null;
  }
}
