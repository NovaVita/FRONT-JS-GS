import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

import logo932x180 from "../assets/logo932x280.png";
import fototomaz from "../assets/foto-tomaz.jpeg";
import fotorony from "../assets/foto-rony.png";

function Aboutus() {
  return (
    <Container>
      <div
        className="d-flex justify-content-center flex-wrap"
        style={{ marginBottom: "70px" }}
      >
        <Card className="my-4">
          <Card.Img variant="top" src={logo932x180} />
          <Card.Body>
            <Card.Text>
              <b>Quem somos?</b>
              <br></br>
              "ToRo" is a startup company dedicated to fostering innovative
              ideas aimed at making the world a better place to live. Using
              technology as their primary tool, ToRo focuses on developing
              groundbreaking solutions to address various global challenges.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ maxWidth: "18rem" }} className="my-2 mx-3">
          <Card.Img variant="top" src={fototomaz} />
          <Card.Body>
            <Card.Title>Tomáz</Card.Title>
            <Card.Text>
              Apaixonado por Engenharia de Software, sempre busco maneiras de
              evoluir. Adoro enfrentar desafios de cabeça erguida e estou
              comprometido em crescer não apenas como profissional, mas também
              como uma pessoa responsável e dedicada, pronto para contribuir
              positivamente em cada projeto que assumo!
            </Card.Text>
            <a
              href="https://www.linkedin.com/in/tomazcarballo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-primary">LinkedIn</button>
            </a>
          </Card.Body>
        </Card>
        <Card style={{ maxWidth: "18rem" }} className="my-2 mx-3">
          <Card.Img variant="top" src={fotorony} />
          <Card.Body>
            <Card.Title>Rony</Card.Title>
            <Card.Text>
              Sou fácil de lidar e adoro trabalhar em equipe. Comprometido com o
              que faço, sempre dou 100%. Aberto a críticas, adoro aprender e
              experimentar coisas novas. Valorizo o lado sério das coisas, mas
              também adoro uma boa conversa e explorar o desconhecido.
            </Card.Text>
            <a
              href="https://www.linkedin.com/in/rony-nagai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-primary">LinkedIn</button>
            </a>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

export default Aboutus;
