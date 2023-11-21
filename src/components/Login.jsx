import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";

export default function Login() {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState({
    email: "",
    senha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let users;
    let user = users;

    try {
      const response = await fetch("https:///usuarios");
      users = await response.json();
    } catch (error) {
      alert("Ocorreu um erro no processamento da sua solicitação!");
    }
    for (let x = 0; x < users.length; x++) {
      user = users[x];
      if (user.email == usuario.email && user.senha == usuario.senha) {
        alert("Login realizado com sucesso!");
        const tokenUser = Math.random().toString(16).substring(2);
        console.log(tokenUser);
        sessionStorage.setItem("token-user", tokenUser);
        sessionStorage.setItem("data-user", JSON.stringify(user));
        navigate("/dashboard");
        return;
      }
    }

    alert("Login ou senha incorretos!");
    setUsuario({
      email: "",
      senha: "",
    });
  };
  
  return (
    <MDBContainer className="my-5 gradient-form">
      <MDBRow>
        <MDBCol col="6" className="mb-5">
          <form className="d-flex flex-column ms-5" onSubmit={handleSubmit}>

            <p>Faça seu login:</p>

            <MDBInput
              wrapperClass="mb-4"
              label="Endereço de Email"
              type="email"
              name="email"
              id="idEmail"
              placeholder="Digite seu email"
              value={usuario.email}
              onChange={handleChange}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Senha"
              type="password"
              name="senha"
              id="idSenha"
              placeholder="Digite sua senha"
              value={usuario.senha}
              onChange={handleChange}
            />

            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn className="mb-4 w-100 gradient-custom-2">Login</MDBBtn>
              <div className="text-muted">
                <a className="custom1" href="/">
                  Home
                </a>
              </div>
            </div>
          </form>
          <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
            <p className="mb-0">Não possui uma conta?</p>
            <div className="mx-2">
              <Link to="/">
                <MDBBtn outline id="custom2">Registrar</MDBBtn>
              </Link>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

    // <Container>
    //   <Form className="mt-4" onSubmit={handleSubmit}>

    //     <Button href="/" variant="primary" type="submit" className="mb-4">
    //       Voltar à página principal
    //     </Button>
        
    //     <Form.Group className="mb-3" controlId="formBasicEmail">

    //       <Form.Label>Endereço de Email</Form.Label>
    //       <Form.Control type="email" placeholder="Adicionar Email" />
    //       <Form.Text className="text-muted">
    //         Nós nunca iremos compartilhar seu e-mail com ninguém!
    //       </Form.Text>
    //     </Form.Group>

    //     <Form.Group className="mb-3" controlId="formBasicPassword">
    //       <Form.Label>Senha</Form.Label>
    //       <Form.Control type="password" placeholder="Adicionar Senha" />
    //     </Form.Group>

    //     <Button href="/" variant="primary" type="submit">
    //       Enviar
    //     </Button>

    //   </Form>
    // </Container>
  );
}
