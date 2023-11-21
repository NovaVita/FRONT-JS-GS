import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Teste() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">NovaVita</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/erro404">Home</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/erro404">Page1</NavDropdown.Item>
              <NavDropdown.Item href="/erro404">Page2</NavDropdown.Item>
              <NavDropdown.Item href="/erro404">Page3</NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item href="/aboutus">Sobre Nós</NavDropdown.Item>
            </NavDropdown>            
          </Nav>

          <Nav>
            <b>
              <Nav.Link href="/login" className="ml-auto">Login</Nav.Link>
            </b>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Teste;