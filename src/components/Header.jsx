import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Teste() {
  const handleLogout = () => {
    sessionStorage.removeItem("token-user");
    sessionStorage.removeItem("data-user");
    navigate("/login");
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">NovaVita</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Acessos" id="basic-nav-dropdown">
              <NavDropdown.Item href="/monitoramento">
                Monitoramento
              </NavDropdown.Item>
              <NavDropdown.Item href="/erro404">Page2</NavDropdown.Item>
              <NavDropdown.Item href="/erro404">Page3</NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item href="/aboutus">Sobre Nós</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav>
            <b onClick={handleLogout}>
              <Nav.Link href="/login" className="ml-auto">
                logout
              </Nav.Link>
            </b>
            <b>
              <Nav.Link href="/login" className="ml-auto">
                Login
              </Nav.Link>
            </b>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
