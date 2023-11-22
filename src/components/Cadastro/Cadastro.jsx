import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

export default function Cadastro() {
  const navigate = useNavigate();

  const [novoUsuario, setNovoUsuario] = useState({
    name: "",
    email: "",
    senha: "",
  });

  const verificarEmailExistente = async (email) => {
    try {
      const response = await fetch(
        `http://localhost:3000/usuarios?email=${email}`
      );
      const data = await response.json();
      return data.length > 0;
    } catch (error) {
      console.error("Erro ao verificar e-mail:", error);
      return false;
    }
  };

  const handleRegistro = async () => {
    if (novoUsuario.name && novoUsuario.email && novoUsuario.senha) {
      const emailExistente = await verificarEmailExistente(novoUsuario.email);

      if (emailExistente) {
        alert("Este e-mail já está em uso. Tente outro e-mail.");
      } else {
        try {
          const response = await fetch("http://localhost:3000/usuarios", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(novoUsuario),
          });

          if (response.ok) {
            alert("Cadastro realizado com sucesso!");
            setNovoUsuario({ name: "", email: "", senha: "" });

            // window.location.href = "/login";
            navigate("/login");
          } else {
            alert("Falha ao registrar usuário.");
          }
        } catch (error) {
          alert("Ocorreu um erro no processamento da sua solicitação!");
        }
      }
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNovoUsuario({ ...novoUsuario, [name]: value });
  };

  //   const handleVoltarLogin = () => {
  //     navigate("/login");
  //   };

  return (
    <MDBContainer className="my-5 gradient-form">
      <MDBRow>
        <MDBCol col="6" className="mb-5">
          <div>
            <p>Faça seu Cadastro:</p>

            <MDBInput
              wrapperClass="mb-4"
              label="Digite seu nome"
              type="text"
              name="name"
              placeholder="Nome"
              value={novoUsuario.name}
              onChange={handleChange}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Digite seu email"
              type="email"
              name="email"
              placeholder="Email"
              value={novoUsuario.email}
              onChange={handleChange}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Digite sua senha"
              type="password"
              name="senha"
              placeholder="Senha"
              value={novoUsuario.senha}
              onChange={handleChange}
            />

            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn
                className="mb-4 w-100 gradient-custom-2"
                onClick={handleRegistro}
              >
                Cadastrar
              </MDBBtn>
              {/* <div className="text-muted">
                <a className="custom1" href="/">
                  Home
                </a>
              </div> */}
            </div>
          </div>
          <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
            <p className="mb-0">Já possui uma conta?</p>
            <div className="mx-2">
              <Link to="/login">
                <MDBBtn outline id="custom2">
                  Voltar para o login
                </MDBBtn>
              </Link>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
