import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import './FooterLogin.scss';

function FooterLogin() {
    return (
      <footer className="custom-footer fixed-bottom">
        <div className="container">
          <Nav className="justify-content-center">
            <Card.Text>
              A NovaVita agradece pela visita!
            </Card.Text>
          </Nav>
        </div>
      </footer>
    );
  }
  
  export default FooterLogin;
